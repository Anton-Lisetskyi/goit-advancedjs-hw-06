/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(
  top: T,
  bottom: U
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

const top = {
  name: "Top Object",
  color: "Blue",
};

const bottom = {
  position: 1,
  weight: 100,
};

const result = compare(top, bottom);

console.log(result);

export {};