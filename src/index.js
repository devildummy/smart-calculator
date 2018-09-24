class SmartCalculator {
  constructor(initialValue) {
    this.toDo=[];
    this.toDo.push(initialValue);
  }

  add(number) {
    this.toDo.push('+',number);
    return this;
  }
  
  subtract(number) {
    this.toDo.push('-',number);
    return this;
  }

  multiply(number) {
    this.toDo.push('*',number);
    return this;
  }

  devide(number) {
    this.toDo.push('/',number);
    return this;
  }

  pow(number) {
    this.toDo.push('^',number);
    return this;
  }

  toString(){
    let arr=[];
    this.toDo.forEach(function(item,i){arr[i]=item;});
    for(let i=arr.length-1;i>0;i--){
      if(arr[i]=='^'){
        arr.splice(i-1,3,Math.pow(arr[i-1],arr[i+1]));
        i++;
      }
    }
    for(let i=0;i<arr.length;i++){
      if(arr[i]=='*' ){
        arr.splice(i-1,3,arr[i-1]*arr[i+1]);
        i--;
      }else if(arr[i]=='/'){
        arr.splice(i-1,3,arr[i-1]/arr[i+1]);
        i--;
      }
    }
    for(let i=0;i<arr.length;i++){
      if(arr[i]=='+'){
        arr.splice(i-1,3,arr[i-1]+arr[i+1]);
        i--;
      }else if(arr[i]=='-'){
        arr.splice(i-1,3,arr[i-1]-arr[i+1]);
        i--;
      }
    }
  return arr[0];
  }
}

module.exports = SmartCalculator;
