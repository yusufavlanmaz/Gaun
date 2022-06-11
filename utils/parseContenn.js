export default function(data){
    return Object.keys(data).map(key => {
       return {
            id: key,
            ...data[key],
        };
    })
   
}




{contentList.map((users)=>(
    console.log(users.id)
))}

