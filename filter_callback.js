let years = [1996, 2000, 1998, 2006, 1989, 2013];
function genZ(birthYear){
    if ((1996 < birthYear) && (birthYear < 2013)){
        console.log(birthYear);
    }
}
const genZYears = years.filter(birthYear => genZ(birthYear));