
  var template = _.template(
            $( "script.template" ).html()
        );
  
  var subjectTrackTpl = _.template(
            $( "script.trackTpl" ).html()
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
    getNextQuestion:function(){
        this.getSubjectData()["id"+(this.qNo)].status="Ansd";
        this.drawSubjectTrack();
        if(this.getSubjectData()["id"+(this.qNo+1)]!==undefined)
        {this.qNo++}
        this.render();
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





