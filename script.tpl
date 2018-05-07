<script type="text/template" class="template">
    <div class"col-md-12 quesContainDiv">
        <div class="quesPanel">
             <b>Question No : <%= qNo %></b> <br/>
             </div>
             <div class="quesContent">
             <p><b><%= Q.ques%></b></p><br/>
             <% for(option in Q.options) { %>
             <input type='radio' value='<%= option %>' name='<%= name %>' onclick=" Exam.setAnswer(this.value)" /><%= Q.options[option] %> <br/>
             <% } %>
             </div>
     </div>
    </script>



<script type="text/template" class="trackTpl">
        <div class="col-md-5 containButton">
            <div class="col-md-12 packButton">
             Choose a Question :<br/>
                <% var index=1;   
                for(q in Q) { %>
                    <div class="<%= Q[q].status %>" onclick="Exam.openQuestion(<%= index %>)">
                    <button class="w3-button w3-round-large common <%= Q[q].status %>"> <%= index++ %> </button>
        </div>
                <% } %>
        </div>
    </script>