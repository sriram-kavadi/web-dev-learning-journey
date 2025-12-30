export default function Display({won}){
    return <>
    <div>
        {!won?<h1>Lottery!</h1>:<h1>Lottery 'Congratulations, you won!'</h1>}
    </div>
    </>
}