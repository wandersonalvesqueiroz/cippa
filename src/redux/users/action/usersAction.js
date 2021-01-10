import api from '../../../Api2'
import { reset as resetForm, initialize } from 'redux-form'

// export function  getList() {
//     var request = api.users().then(users => {   
//         return users
//     })
//     console.log('teste:',request)
//     return {
//         type: 'USERS_FETCHED',
//         payload: request
//     }
// }

export function  getList() {
    const request = api.get("users")

    return {
        type: 'USERS_FETCHED',
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
        api[method](`/users/${id}`, values)
            .then(resp => {
                alert('Operação realizada com sucesso!')
                if (id) {
                    dispatch([showUpdate(id)])
                }
                else {
                    dispatch([resetForm('userForm')])
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
    api.get(`/users/${id}`)
        .then(resp => {

            resp.data.role = resp.data.role[0]
            dispatch([
                initialize('userForm', resp.data)
            ])
        })
}

export function destroy(id) {
    return dispatch => 
    api.delete(`/users/${id}`)
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