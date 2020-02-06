export class Course{
  name : string;
  price : number;
  category: string;
}

export const courses:Course[]=[
    { name: 'Java', price: 100, category: 'Development'},
    { name: '.Net', price: 200, category: 'Development' },
    { name: 'Python',price: 300, category: 'Development' },
    { name: 'Angular',price : 400, category: 'Development'}
];

