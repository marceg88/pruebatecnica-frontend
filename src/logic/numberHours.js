
export const numberHoursCourse = (courses, hours) => {
    let total = 0
    if(courses)
    for(let course of courses){
        if(total <= 20){
            total = total + hours
        }
    }
    return total
}