// house all the fetch functions for crud updates on the POST resource
import tokenService from "./tokenService";

const BASE_URL = '/api/sneakers/';
// YOU HAVE TO SET IT UP IN SERVER.JS <- ROUTES
// THESE FUNCTIONS ARE CALLED In our componets 
// in the browser to communicate with our EXPRESS SERVER
// aka the endpoints are our servers routes, which call the controller functions

// Make a request to create a sneaker

export function create(data){
    return fetch(BASE_URL, {
        method: 'POST',
        body: data,
        headers: {
            Authorization: "Bearer " + tokenService.getToken()
            // ^Grabs token from local storage to tie user to it
        }

    }).then((responseFromTheSever) => {
        if(responseFromTheSever.ok) return responseFromTheSever.json() //return as json if everything okay

        // If errors
        return responseFromTheSever.json().then(res => {
            console.log(res, '<--------- response in sneakerAPI create')
            throw new Error('Something went wrong in create post, refresh and try one more time')
        })
    })
}



export function getAll() {
	return fetch(BASE_URL, {
	  headers: {
		'Authorization': 'Bearer ' + tokenService.getToken()
	  }
	})
	.then(res => res.json());
  }