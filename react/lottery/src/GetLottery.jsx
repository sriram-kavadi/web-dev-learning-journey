export default function GetLottery({setNumber,setWon,n,winData}){
    const pow=(n)=>{
        let pows=1;
        for(let i=n-1;i>=1;i--){
            pows*=10;
        }
        return pows;
    }
    const ticket=()=>{
        if(n!=null&&winData!=null){
        let temp=Math.floor(Math.random()*9*pow(n))+1*pow(n);
        setNumber(temp);
        let sum=0;
        while(temp>0){
            sum+=temp%10;
            temp=Math.floor(temp/10);
        }
        if(sum==winData){
            setWon(true);
            console.log("won")
        }else{
            setWon(false);
            console.log("lose")
        }}
    }
    return<>
    <button onClick={ticket}>Get New Ticket</button>
    </>
}