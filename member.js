function skillsMember() {
    var member = document.getElementById("member").value;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsArray = memberSkills.value.split(",");
    var memberSkillsArrayLength = memberSkillsArray.length;
    var memberSkillsArrayIndex = memberSkillsArray.indexOf(member);
    if (memberSkillsArrayIndex > -1) {
        memberSkillsArray.splice(memberSkillsArrayIndex, 1);
        memberSkills.value = memberSkillsArray.join(",");
    } else {
        memberSkillsArray.push(member);
        memberSkills.value = memberSkillsArray.join(",");
    }
}