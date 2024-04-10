function ListGroup(){

// const provinces = ['Cavite','Laguna','Batangas','Rizal','Quezon'];
const regions = {
    1 : {
        provinces:  ['Ilocos Norte','Ilocos Sur','La Union','Pangasinan']
    },
    2:{
        provinces:  ['Batanes','Cagayan','Nueva Viscaya','Quirino']
    },
    3:{
        provinces: ['Aurora','Bataan','Nueva Ecija','Pampanga','Tarlac','Zambales']
    },
    4:{
        a:{
            provinces:['Cavite','Laguna','Batangas','Rizal','Quezon']
        },
        b:{
            provinces:['Marinduque','Occidental Mindoro','Oriental Mindoro','Palawan','Romblon']
        }
    }



}
console.log(Object.values(regions));
// console.log(regions[1].provinces[1]);
return (
    <>
        {/* {Object.keys(regions).map()} */}
    </>
);
}

export default ListGroup;