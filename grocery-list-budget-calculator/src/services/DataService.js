class DataService{
    async loadFruitsFromFile (){
        try{
            const response = await fetch("/data.json");
            const data = await response.json();
            return data;
        }catch(error){
            console.log(error);
        }

    }
}

export default new DataService();