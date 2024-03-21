const Mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function (){
        return Math.floor(this.mass / this.height ** 2);
    }
}
const John = {
    fullname: 'John Smit',
    mass: 92,
    height: 1.95,
    calcBmi: function (){
        return Math.floor(this.mass / this.height ** 2);
    }
}
if (Mark.calcBmi() > John.calcBmi()){
    console.log(`${Mark.fullname} имеет имт ${Mark.calcBmi()} так что он ${Mark.calcBmi() <= 18.5 && Mark.calcBmi() >= 24.9 ? 'Надо набрать вес' : 'норм'}`)
} else if (John.calcBmi() > Mark.calcBmi()){
    console.log(`${John.fullname} имеет имт ${John.calcBmi()} так что он ${John.calcBmi() <= 18.5 && John.calcBmi() >= 24.9 ? 'Надо набрать вес' : 'норм'}`)

} else{
    console.log("Пиздец.")
}
// В методе calcBmi, вы используете Math.floor, который округляет результат вниз до ближайшего целого. Это может быть не идеально для расчета ИМТ, так как точность может быть важной. Рассмотрите возможность использования Math.round для округления до ближайшего целого или просто возвращения значения без округления для большей точности.
//
//     В вашем условном операторе вы сравниваете ИМТ с числами 18.5 и 24.9 для определения, нормальный ли вес или нет. Однако, логическое выражение Mark.calcBmi() <= 18.5 && Mark.calcBmi() >= 24.9 никогда не будет истинным, потому что ИМТ не может быть одновременно меньше или равен 18.5 и больше или равен 24.9. Вы, вероятно, хотели использовать оператор || (ИЛИ) вместо && (И). К тому же, условие для проверки, что ИМТ находится в пределах нормы, должно быть инвертировано, так как нормальный диапазон ИМТ обычно составляет от 18.5 до 24.9.

// const Mark = {
//     fullname: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBmi: function (){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };
// const John = {
//     fullname: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBmi: function (){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };
//
// Mark.calcBmi();
// John.calcBmi();
//
// if (Mark.bmi > John.bmi){
//     console.log(`${Mark.fullname} имеет ИМТ ${Mark.bmi.toFixed(1)}, что выше, чем у ${John.fullname} (${John.bmi.toFixed(1)})`);
// } else if (John.bmi > Mark.bmi){
//     console.log(`${John.fullname} имеет ИМТ ${John.bmi.toFixed(1)}, что выше, чем у ${Mark.fullname} (${Mark.bmi.toFixed(1)})`);
// } else {
//     console.log(`ИМТ ${Mark.fullname} и ${John.fullname} одинаковы (${Mark.bmi.toFixed(1)})`);
// }
