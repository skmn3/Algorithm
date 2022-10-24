function solution(survey, choices) {
    let R = 0 // 라이언 형
    let T = 0 // 튜브 형
    let C = 0 // 콘 형
    let F = 0 // 프로도 형
    let J = 0 // 제이지 형
    let M = 0 // 무지 형
    let A = 0 // 어피치 형
    let N = 0 // 네오 형
    
    for (let i = 0; i < survey.length; i++) {
        if(survey[i] === "AN") {
            N += choices[i]-4
        }
        
        if(survey[i] === "CF") { 
            F += choices[i]-4 
        }
                
        if (survey[i] === "MJ") { 
            J += choices[i]-4
        }
        
        if(survey[i] === "RT") { 
            T += choices[i]-4 
        }
                
        if (survey[i] === "NA") {
            A += choices[i]-4
        }  
        
        if (survey[i] === "TR") { 
            R += choices[i]-4
        }

        if (survey[i] === "FC") { 
            C += choices[i]-4 
        }

        if(survey[i] === "JM") { 
            M += choices[i]-4
        }
   }
    
    let answer = "RCJA"

    if (T > R){
        answer = answer.replace("R","T")
    }
    
    if (F > C) {
        answer = answer.replace("C","F")
    }
    
    if (M > J) {
        answer = answer.replace("J","M")
    }
    
    if (N > A) {
        answer = answer.replace("A","N")
    }
    
    return answer;
}