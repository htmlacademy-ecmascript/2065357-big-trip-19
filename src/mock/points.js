const destinations = [
  {
    id: 1,
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        'src': 'https://loremflickr.com/248/152?random=22',
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    id: 2,
    description: 'Amsterdam, Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    name: 'Amsterdam',
    pictures: [
      {
        'src': 'https://loremflickr.com/248/152?random=45',
        'description': 'Amsterdam Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=12',
        'description': 'Amsterdam Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=28',
        'description': 'Amsterdam Cras aliquet varius magna, non porta ligula feugiat eget.'
      }
    ]
  },
  {
    id: 3,
    description: 'Geneva, Aliquam erat volutpat.',
    name: 'Geneva',
    pictures: [
      {
        'src': 'https://loremflickr.com/248/152?random=78',
        'description': 'Geneva Aliquam erat volutpat.'
      },
      {
        'src': 'https://loremflickr.com/248/152?random=77',
        'description': 'Geneva Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.'
      }
    ]
  }
];

const offersByType = [
  {
    type: 'taxi',
    offers: [
      {
        'id': 1,
        'title': 'Upgrade to a business class',
        'price': 120
      },
      {
        'id': 2,
        'title': 'Order Uber',
        'price': 20
      },
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        'id': 1,
        'title': 'Add luggage',
        'price': 50
      },
      {
        'id': 2,
        'title': 'Switch to comfort',
        'price': 80
      },
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        'id': 1,
        'title': 'Rent a car',
        'price': 200
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        'id': 1,
        'title': 'Add breakfast',
        'price': 50
      }
    ]
  }
];

const mockPoints = [
  {
    basePrice: 1100,
    dateFrom: '2019-07-10T22:55',
    dateTo: '2019-07-11T11:22',
    destination: [2],
    id: '0',
    isFavorite: false,
    offers: [2],
    type: 'taxi'
  },
  {
    basePrice: 2670,
    dateFrom: '2019-03-18T12:25',
    dateTo: '2019-03-18T13:35',
    destination: [2],
    id: '1',
    isFavorite: false,
    offers: [1, 2],
    type: 'flight'
  },
  {
    basePrice: 1000,
    dateFrom: '2019-03-18T14:30',
    dateTo: '2019-03-18T16:05',
    destination: [1],
    id: '2',
    isFavorite: false,
    offers: [1],
    type: 'drive'
  },
  {
    basePrice: 1500,
    dateFrom: '2019-03-18T12:25',
    dateTo: '2019-03-18T13:35',
    destination: [3],
    id: '3',
    isFavorite: false,
    offers: '',
    type: 'drive'
  },
  {
    basePrice: 3000,
    dateFrom: '2019-03-19T11:20',
    dateTo: '2019-03-19T13:00',
    destination: [1],
    id: '4',
    isFavorite: false,
    offers: [1],
    type: 'check-in'
  }
];

export { mockPoints, offersByType, destinations };
