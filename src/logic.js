function find_final_letter(a, b){
    console.log("function started");
    let n1 = a.split('');
    let n2 = b.split('');
    for(let i=0; i<n1.length;i++){
        for(let j=0; j<n2.length;j++){
            if(n1[i]===n2[j]){
                n1.splice(i, 1);
                n2.splice(j, 1);
            }
        }
    }
    console.log("after for loop");
    let l = n1.length + n2.length;
    let f = ["F-Friend", "L-Love", "A-Affection", "M-Marriage", "E-Enemy", "S-Sister"];
    let n = f.length;
    let d = f.length;
    let c = 0;
    let index = 0;
    console.log("before while");
    while(f.length !== 1){
        console.log("before while:", d);
        console.log("l:",l);
        console.log("d:", d);
        console.log("n:",n);
        console.log("array length:",f.length);
        console.log("Index:", index)
        console.log(f);
        if (l>n && l%n!==0){
            d = (l%n)-1;
        }
        else if(l%n===0){
            d = n-1;
        }
        else{
            d = l-1;
        }
        console.log("after condition:", d);
        d = d+index;
        let del = d%n;
        f.splice(del, 1);
        index = 0;
        if(del>0 && del<n-1){
            index = del;
        }
        else if(del>=n-1){
            index = 0;
        }
        n = n-1;
        c= c+1;
        console.log("after while:");
        console.log(f);
        console.log("d:", d);
        console.log("n:",n);
        console.log("array length:",f.length);
        console.log("Index:", index)
    }
    let o = f[0];
    console.log("function ended");
    console.log(o);
    return o;
};

export default find_final_letter;
