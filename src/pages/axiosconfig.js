export const axiosConfig = {
        //  withCredentials: true,

         auth: {
           username: "5f2d27250499f52b273378c4",
           password: "55cc789375ecd3485a0ef1f89c59a06d",
         },

         header: {
           Accept: "application/json;charset=UTF-8",
           "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "https://waterlevel.codesoft.co.ke/",
           "Access-Control-Allow-Headers":
             "Origin,X-Requested-With,Content-Type,Accept",
           CORS_ORIGIN_ALLOW_ALL: "true",
           //  "Access-Control-Allow-Credentials": "true",
           "Access-Control-Allow-Methods": "GET",
           "Cache-Control": "no-cache, no-store, must-revalidate",
           //  "Access-Control-Allow-Headers":
           //    "Origin, X-Requested-With, Content-Type, Accept",
           origin: "https://waterlevel.codesoft.co.ke/",
           vary: "Accept-Encoding,Origin",

           Pragma: "no-cache",
           Expires: 0,
           " If-Modified-Since": "Tue, 18 Aug 2020 09:18:22 GMT",
           "Accept-Encoding": "gzip,deflate,br",
           //  'Content-Type':'multipart/form-data'
         },
         mode: "no-cors",
       };