function doSomething(event){
    console.log("doing something....")
    console.log(event)
}

export default function Button(){
    return<>
    <button onClick={doSomething}>Click Me!</button>
    </>
}