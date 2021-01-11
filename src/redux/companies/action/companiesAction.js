import api from '../../../Api2'
import { reset as resetForm, initialize } from 'redux-form'

export function  getList() {
    const request = api.get("companies")

    return {
        type: 'COMPANIES_FETCHED',
        payload: request
    }
}


export function create(values){
    return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')
}

function submit(values, method){
    const id = values.id ? values.id : ''
    return dispatch => {
        api[method](`/companies/${id}`, values)
            .then(resp => {
                alert('Operação realizada com sucesso!')
                if (id) {
                    dispatch([showUpdate(id)])
                }
                else {
                    dispatch([resetForm('companyForm')])
                }
            })
            .catch(e => {
                if (e.response) {
                    // Request made and server responded
                    e.response.data.forEach(error =>alert(error.message));

                  } 
            })
    }
}


export function showUpdate(id) {
    return dispatch => 
    api.get(`/companies/${id}`)
        .then(resp => {
            dispatch([
                initialize('companyForm', resp.data)
            ])
        })
}

export function destroy(id) {
    return dispatch => 
    api.delete(`/companies/${id}`)
        .then(resp => {
            if(resp.status >= 200 && resp.status < 300){
                alert('Cadastro Excluído!')
            }else{
                alert('Erro ao excluir cadastro!')
            }

            dispatch([
                getList()
            ])
        })
}