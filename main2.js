  var template = _.template(
            $( "#includedContent .template" ).html()
        );
  
  var subjectTrackTpl = _.template(
            $( "#includedContent .trackTpl" ).html()
        );

var Exam={
    subject:"physics",
    qNo:1,
    getId:function(){
      return "id"+this.qNo;  
    },
    getName:function(){
        return this.subject+"_id"+this.qNo; 
    },
     markQuestion:function(){
        this.getSubjectData()["id"+(this.qNo)].status="markR";
        this.drawSubjectTrack();
        if(this.getSubjectData()["id"+(this.qNo+1)]!==undefined)
        {this.qNo++}
        this.render();
    },
    getNextQuestion:function(){
        var myanswer = (answers[Exam.subject]["id"+(this.qNo)]!=null);
        
        this.getSubjectData()["id"+(this.qNo)].status=myanswer?"Ansd":"NAnsd";
        this.drawSubjectTrack();
        if(this.getSubjectData()["id"+(this.qNo+1)]!==undefined)
        {this.qNo++}
        this.render();
    },
     setAnswer:function(value){
        answers[Exam.subject]["id"+(this.qNo)]=value; 
     },
    getPrevQuestion:function(){
        if(this.qNo>1)
        {this.qNo--}
        this.render();
    },
    getSubjectData:function(){
        return questions[Exam.subject].data;
    },
     setSubject:function(sub){
       this.subject=sub;
        this.qNo=1;
       this.render();
    this.drawSubjectTrack();
    },
    render:function(){
        $("#start").html(template({Q:Exam.getSubjectData()[Exam.getId()],name:Exam.getName(),"qNo":Exam.qNo}));
    },
    drawSubjectTrack:function(){
        $("#subjectTrack").html(subjectTrackTpl({
            Q:Exam.getSubjectData(),
            subject:Exam.subject}));
    },
    openQuestion:function(qNo){
        this.qNo=qNo;
        console.log(qNo);
        this.render();
    }
};


Exam.drawSubjectTrack();
Exam.render();





