gridcalendar = document.querySelector('.gridcalendar')
heading = document.querySelector('.heading')
scrollleftbtn = document.querySelector('.leftscroll')
scrollrighttbtn = document.querySelector('.rightscroll')
gridscroll = document.querySelector('.gridscroll')

let yearvalue, monthvalue;
var currentdate = new Date();
var currentyear = currentdate.getFullYear()
var currentmonth = Number(currentdate.getMonth()) + 1
var firstdayofmonth = new Date(currentmonth.toString() + "/" + "1" + "/" + currentyear.toString()).getDay() + 1
var newmonth = currentmonth
var newdayofmonth = new Date(newmonth.toString() + "/" + "1" + "/" + currentyear.toString()).getDay() + 1

let v, f, newvalue, oldval, b, l, lastdayid, optionmonth;
v??=1
f??=firstdayofmonth
newvalue??=0
b??=0, l??=0
let oddcells, nextcells;
let lastday;
//lastday??=0
oddcells??=0
oldval ??= (new Date(currentmonth.toString() + "/" + "1" + "/" + currentyear.toString()).getDay())-1

heading.innerHTML = (new Date(currentmonth.toString() + "/" + currentdate.getDate() + "/" + currentyear.toString())).toDateString('mmm dd yyyy')

function calendardays(yearvalue, monthvalue){
    let days;
    switch (monthvalue){
        case 1:{//JANUARRY
            days = 31
            break
        }
        case 2:{//FEBRUARY
            if (yearvalue % 4 == 0)
            {
                days = 29
            }
            else{
                days = 28
            }
            break
        }
        case 3:{//MARCH
            days = 31
            break
        }
        case 4:{//APRIL
            days = 30
            break
        }
        case 5:{//MAY
            days = 31
            break
        }
        case 6:{//JUNE
            days = 30
            break
        }
        case 7:{//JULY
            days = 31
            break
        }
        case 8:{//AUGUST
            days = 31
            break
        }
        case 9:{//SEPTEMBER
            days = 30
            break
        }
        case 10:{//OCTOBER
            days = 31
            break
        }
        case 11:{//NOVEMBER
            days = 30
            break
        }
        case 12:{//DECEMBER
            days = 31
            break
        }
        default: {// 0 //either JANUARY OR DECEMBER
            days = 31;//currentmonth
            break
        }
    
    }
    return days
        
}

function createcells()
{
    let x = 0
for(let i=0; i<42; i++){
    const gridcell = document.createElement('div')
    gridcell.setAttribute("class", "cells")
    gridcell.setAttribute("cellnumber", i+1)
    //gridcell.setAttribute("c_cells"+(i+1), (i+1))
    //gridcell.className = "c_cells"+(i+1)
    gridcell.style.width = '50px'
    gridcell.style.height = '35px'
    
    //heading.innerHTML = new Date(currentmonth.toString() + "/" + "1" + "/" + currentyear.toString())
    // + 1

    

    if((i>=firstdayofmonth-1) && (i <=(calendardays(currentyear, currentmonth) + (firstdayofmonth-1) - 1)))
        { gridcell.setAttribute("id", x + 1); x++; gridcell.innerHTML = x 
            if(x==new Date().getDate())
            {gridcell.style.backgroundColor = 'rgba(255, 50, 50, 0.3)'; gridcell.style.border = "3px solid black"}
        }
    let gridarray = []
    gridarray.push(gridcell)
    console.log(gridarray)
    
    gridcalendar.appendChild(gridcell)

    gridcell.addEventListener('mousemove', (e)=>{
        let idnumber = e.target.id
        if (idnumber.length==0) {return}//((idnumber >= calendardays(currentyear, currentmonth) + 1) || (idnumber < 0)) {return}
        else
        {heading.innerHTML = (new Date(currentmonth.toString() + "/" +
         idnumber + "/" + currentyear.toString())).toDateString('mmm dd yyyy')}
         console.log(idnumber)
    })    
    
}
   
    // const mycell = document.querySelector('[cellnumber="'+ v.toString() +'"]')//getElementById('15')
    // mycell.style.backgroundColor = 'blue'

    printolddate()
    printnextdate()
    printtitle()

}

function printolddate(){
      console.log(currentmonth - 1)  
      console.log(calendardays(currentyear, newmonth - 1))
      console.log(new Date(currentmonth.toString() + "/" + "1" + "/" + currentyear.toString()).getDay())
      
      cellarray = []
      newvalue = ""
      b = ""
      oldval=""
      oldval = (new Date(currentmonth.toString() + "/" + "1" + "/" + currentyear.toString()).getDay())-1

      for (n = 1; n < (firstdayofmonth); n++){
        oddcells = document.querySelector('[cellnumber="'+ n.toString() +'"]')
        
        newvalue = (calendardays(currentyear, currentmonth - 1) - oldval) + b//+ firstdayofmonth +1
        console.log(currentmonth)//calendardays(currentyear, newmonth - 1))

        oddcells.innerHTML = newvalue.toString()
        oddcells.style.backgroundColor = 'rgba(0,0,0,0.2)'
        oddcells.style.fontSize = '10px'
        oddcells.style.pointerEvents = 'none'
        oddcells.style.opacity = 0.5
        cellarray.push(oddcells)
        b++
      }
      //console.log(cellarray)
}

function printnextdate(){
    l = ""
    lastdayid = ""
    lastday = document.getElementById(calendardays(currentyear, currentmonth).toString())
    lastdayid = Number(lastday.getAttribute('cellnumber'))
    for (z = (lastdayid + 1); z <= 42; z++){
        nextcells = document.querySelector('[cellnumber="'+ z.toString() +'"]')
        l++
        nextcells.innerHTML= l.toString()
        nextcells.style.backgroundColor = 'rgba(0,0,0,0.2)'
        nextcells.style.fontSize = '10px'
        nextcells.style.pointerEvents = 'none'
        nextcells.style.opacity = 0.5
    }
    console.log(lastday)
    console.log(lastdayid)
}

function monthname(monthvalue){
    let name_month;
    switch (monthvalue){
        case 1:{//JANUARRY
            name_month = "January"
            break
        }
        case 2:{//FEBRUARY
            name_month = "February"
            break
        }
        case 3:{//MARCH
            name_month = "March"
            break
        }
        case 4:{//APRIL
            name_month = "April"
            break
        }
        case 5:{//MAY
            name_month = "May"
            break
        }
        case 6:{//JUNE
            name_month = "June"
            break
        }
        case 7:{//JULY
            name_month = "July"
            break
        }
        case 8:{//AUGUST
            name_month = "August"
            break
        }
        case 9:{//SEPTEMBER
            name_month = "September"
            break
        }
        case 10:{//OCTOBER
            name_month = "October"
            break
        }
        case 11:{//NOVEMBER
            name_month = "November"
            break
        }
        case 12:{//DECEMBER
            name_month = "December"
            break
        }
        default: {// 0 //either JANUARY OR DECEMBER
            name_month = 31;//currentmonth
            break
        }
    
    }
    return name_month
    
}

function printtitle(){
    gridscroll.setAttribute ('caption', monthname(currentmonth) + ", " + currentyear)
}

function removeElements(elements){
    for(var i = 0; i < elements.length; i++){
    elements[i].parentNode.removeChild(elements[i]);
    }
    }

   
scrollleftbtn.addEventListener('click', (e)=>{
    //v+=1
    if (currentmonth <= 1)
       {currentmonth = 12; currentyear -= 1; newmonth = currentmonth;}
    else
       {currentmonth -= 1; newmonth = currentmonth;}

    firstdayofmonth = new Date(currentmonth.toString() + "/" + "1" + "/" + currentyear.toString()).getDay() + 1
    //let mycell = document.querySelectorAll('.cells')
    //mycell[2].parentNode.removeChild(mycell[2])
    removeElements(document.querySelectorAll('.cells'));
    createcells()
    heading.innerHTML = (new Date(currentmonth.toString() + "/" + currentdate.getDate() + "/" + currentyear.toString())).toDateString()
    
    printolddate()
    printnextdate()
    printtitle()
    cellarray = []
    newvalue = ""
    b = ""
    oldval=""
    lastdayid = ""
    l= ""

})

scrollrighttbtn.addEventListener('click', (e)=>{
   
    if (currentmonth >= 12)
       {currentmonth = 1; currentyear += 1}
    else
       {currentmonth += 1;}

    firstdayofmonth = new Date(currentmonth.toString() + "/" + "1" + "/" + currentyear.toString()).getDay() + 1
    //let mycell = document.querySelectorAll('.cells')
    //mycell.remove()
    removeElements(document.querySelectorAll('.cells'));
    createcells()
    heading.innerHTML = (new Date(currentmonth.toString() + "/" + currentdate.getDate() + "/" + currentyear.toString())).toDateString()
    // console.log(calendardays(currentyear, currentmonth))
    // console.log(firstdayofmonth)
    printolddate()
    printnextdate()
    printtitle()
    cellarray = []
    newvalue = ""
    b = ""
    oldval=""
    lastdayid = ""
    l= ""
})

createcells()

