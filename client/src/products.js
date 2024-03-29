const products = [
  {
    id: '1',
    name: 'Bien Immobilier 1',
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officia delectus pariatur debitis qui nostrum labore totam sed reprehenderit facilis',
    wilaya: 'Medea',
    category: 'Vente',
    price: 89.99,
    surface: 30,
    rating: 4.5,
    numReviews: 4,
    comments: [
      {
        id: 11,
        owner: 'Zouambia Sohaib',
        createdAt: '13/11/2022',
        comment: 'An Amazing estate',
      },
      {
        id: 11,
        owner: 'Zouambia Oussama',
        createdAt: '13/11/2022',
        comment: 'Can you make the price lower please ?',
      },
      {
        id: 11,
        owner: 'Adjou Amine',
        createdAt: '13/11/2022',
        comment: 'Looks really good',
      },
      {
        id: 11,
        owner: 'Bencheikh Wadjih',
        createdAt: '13/11/2022',
        comment: 'I liked the space',
      },
    ],
  },
  {
    id: '2',
    name: 'Bien Immobilier 2',
    image:
      'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officia delectus pariatur debitis qui nostrum labore totam sed reprehenderit facilis',
    wilaya: 'Alger',
    category: 'Echange',
    price: 599.99,
    surface: 50,
    rating: 4.0,
    numReviews: 4,
    comments: [
      {
        id: 11,
        owner: 'Zouambia Sohaib',
        createdAt: '13/11/2022',
        comment: 'An Amazing estate',
      },
      {
        id: 11,
        owner: 'Zouambia Oussama',
        createdAt: '13/11/2022',
        comment: 'Can you make the price lower please ?',
      },
      {
        id: 11,
        owner: 'Adjou Amine',
        createdAt: '13/11/2022',
        comment: 'Looks really good',
      },
      {
        id: 11,
        owner: 'Bencheikh Wadjih',
        createdAt: '13/11/2022',
        comment: 'I liked the space',
      },
    ],
  },
  {
    id: '3',
    name: 'Bien Immobilier 3',
    image:
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officia delectus pariatur debitis qui nostrum labore totam sed reprehenderit facilis',
    wilaya: 'Boumerdes',
    category: 'Location',
    price: 929.99,
    surface: 70,
    rating: 3,
    numReviews: 3,
    comments: [
      {
        id: 11,
        owner: 'Zouambia Sohaib',
        createdAt: '13/11/2022',
        comment: 'An Amazing estate',
      },
      {
        id: 11,
        owner: 'Zouambia Oussama',
        createdAt: '13/11/2022',
        comment: 'Can you make the price lower please ?',
      },
      {
        id: 11,
        owner: 'Adjou Amine',
        createdAt: '13/11/2022',
        comment: 'Looks really good',
      },
      {
        id: 11,
        owner: 'Bencheikh Wadjih',
        createdAt: '13/11/2022',
        comment: 'I liked the space',
      },
    ],
  },
  {
    id: '4',
    name: 'Bien Immobilier 4',
    image:
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officia delectus pariatur debitis qui nostrum labore totam sed reprehenderit facilis',
    wilaya: 'Tizi Ouzou',
    category: 'Location pour vacances',
    price: 399.99,
    surface: 30,
    rating: 5,
    numReviews: 3,
    comments: [
      {
        id: 11,
        owner: 'Zouambia Sohaib',
        createdAt: '13/11/2022',
        comment: 'An Amazing estate',
      },
      {
        id: 11,
        owner: 'Zouambia Oussama',
        createdAt: '13/11/2022',
        comment: 'Can you make the price lower please ?',
      },
      {
        id: 11,
        owner: 'Adjou Amine',
        createdAt: '13/11/2022',
        comment: 'Looks really good',
      },
      {
        id: 11,
        owner: 'Bencheikh Wadjih',
        createdAt: '13/11/2022',
        comment: 'I liked the space',
      },
    ],
  },
  {
    id: '5',
    name: 'Bien Immobilier 5',
    image:
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1596&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officia delectus pariatur debitis qui nostrum labore totam sed reprehenderit facilis',
    wilaya: 'Adrar',
    category: 'Vente',
    price: 49.99,
    surface: 300,
    rating: 3.5,
    numReviews: 2,
    comments: [
      {
        id: 11,
        owner: 'Zouambia Sohaib',
        createdAt: '13/11/2022',
        comment: 'An Amazing estate',
      },
      {
        id: 11,
        owner: 'Zouambia Oussama',
        createdAt: '13/11/2022',
        comment: 'Can you make the price lower please ?',
      },
      {
        id: 11,
        owner: 'Adjou Amine',
        createdAt: '13/11/2022',
        comment: 'Looks really good',
      },
      {
        id: 11,
        owner: 'Bencheikh Wadjih',
        createdAt: '13/11/2022',
        comment: 'I liked the space',
      },
    ],
  },
  {
    id: '6',
    name: 'Bien Immobilier 6',
    image:
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officia delectus pariatur debitis qui nostrum labore totam sed reprehenderit facilis',
    wilaya: 'Bouira',
    category: 'Echange',
    price: 29.99,
    surface: 50,
    rating: 4,
    numReviews: 4,
    comments: [
      {
        id: 11,
        owner: 'Zouambia Sohaib',
        createdAt: '13/11/2022',
        comment: 'An Amazing estate',
      },
      {
        id: 11,
        owner: 'Zouambia Oussama',
        createdAt: '13/11/2022',
        comment: 'Can you make the price lower please ?',
      },
      {
        id: 11,
        owner: 'Adjou Amine',
        createdAt: '13/11/2022',
        comment: 'Looks really good',
      },
      {
        id: 11,
        owner: 'Bencheikh Wadjih',
        createdAt: '13/11/2022',
        comment: 'I liked the space',
      },
    ],
  },
];

export default products;
