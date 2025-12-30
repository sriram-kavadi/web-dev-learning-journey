import './App.css'
export default function ShowComment({arr}){
    let style={border:"2px solid black"}
    return<>
    <h3>Comments: </h3>
    <div className="set">
        {arr.map(ele=>
            <div className="sets">
                <h5>{ele.userName}</h5>
                <p>{ele.remark}</p>
                <p>{ele.rating}</p>
            </div>
        )}
    </div>
    </>
}