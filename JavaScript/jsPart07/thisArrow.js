const student = {
    name : 'Student',
    marks : 95,
    prop : this,
    getName : function() {
        console.log(this);
        return this.name;
    },
    getMarks : () =>{
        console.log(this); // parents's scope-> window
        return this.marks;
    },

    getInfo1: function(){
        setTimeout(() =>{
            console.log(this);
        }, 2000);
    },

    getInfo2: function(){
        setTimeout(function(){
            console.log(this);
        }, 2000);
    }
}