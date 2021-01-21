import api from '../../../Api2'
import { reset as resetForm, initialize } from 'redux-form'

export function  getList() {
    const request = api.get("standards")
    
    return {
        type: 'STANDARDS_FETCHED',
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
        api[method](`/standards/${id}`, values)
            .then(resp => {
                alert('Operação realizada com sucesso!')
                if (id) {
                    dispatch([showUpdate(id)])
                }
                else {
                    dispatch([resetForm('standardForm')])
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
    api.get(`/standards/${id}`)
        .then(resp => {
            dispatch([
                initialize('standardForm', resp.data)
            ])
        })
}

export function destroy(id) {
    return dispatch => 
    api.delete(`/standards/${id}`)
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