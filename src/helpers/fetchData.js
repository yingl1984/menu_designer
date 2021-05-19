let fetchCall = (api, method, body) => {
    try
    {
        if(!method && !body)
        {
            //return GET request
           return fetch(api);
        }

       else if (method && !body)
       {
           //DELETE request
           return fetch(api, {
               method: method
           });
       }
      else
      {
       //POST or PUT
       return fetch(api, {
           method: method,
           body: body,
           headers: {"Content-Type": "application/json"}
       });
      }
    }
    catch(err)
   {
     return err.message;
   }
};

export default fetchCall;