// Factory Pattern - is a way of creating and interphase for creating 
// Objects, I.E- Diffentent objects with similar xteristics

function MemberFactory (){
    this.createMember = (name, type)=>{
        let member;
        if(type === 'simple'){
            member = new SimpleMembership(name);
        }else if(type === 'standard'){
            member = new StandardMembership(name);
        }else if(type === 'super'){
            member = new SuperMembership(name);
        }
        member.type = type;
        
        member.check = function(){
            return `${this.name} (${this.type}) Cost:${this.cost}`;
        }
        return member;
    }
};

const SimpleMembership = function(name){
    this.name = name;
    this.cost = '$10';
}

const StandardMembership = function(name){
    this.name = name;
    this.cost = '$15';
}

const SuperMembership = function(name){
    this.name = name;
    this.cost = '$20';
}

const members = [];
const factory = new MemberFactory();
members.push(factory.createMember('saka', 'simple'));
members.push(factory.createMember('amara', 'super'));
members.push(factory.createMember('babson', 'standard'));

members.forEach(member => {
    console.log(member);
});
