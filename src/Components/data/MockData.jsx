import { 
    MdCabin,
    MdOutlineApartment,
    MdOutlineHouseSiding,
    MdOutlineWater
} from 'react-icons/md'
import { BsSnow } from 'react-icons/bs'
import { BiHomeAlt } from 'react-icons/bi'
import { 
    GiCampingTent,
    GiCaveEntrance,
    GiEvilTree,
    GiGolfFlag,
    GiKidSlide,
    GiLightningDome,
    GiMountainCave,
    GiSpaceNeedle,
    GiWaveSurfer 
} from 'react-icons/gi'
import { AiOutlineCoffee } from 'react-icons/ai'
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from 'react-icons/fa'
import { RiEarthquakeFill } from 'react-icons/ri'

export const locationsTab = [
    { id: 1, label: 'Design', icon: <MdOutlineApartment size={24} /> },
    { id: 2, label: 'Arctic', icon: <BsSnow size={24} /> },
    { id: 3, label: 'Shared Homes', icon: <MdOutlineHouseSiding size={24} /> },
    { id: 4, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
    { id: 5, label: 'National Parks', icon: <GiKidSlide size={24} /> },
    { id: 6, label: 'Bed & Breakfast', icon: <AiOutlineCoffee size={24} /> },
    { id: 7, label: 'OMG', icon: <GiSpaceNeedle size={24} /> },
    { id: 8, label: 'Camping', icon: <FaCampground size={24} /> },
    { id: 9, label: 'A-frames', icon: <GiCampingTent size={24} /> },
    { id: 10, label: 'Domes', icon: <GiLightningDome size={24} /> },
    { id: 11, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
    { id: 12, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
    { id: 13, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
    { id: 14, label: 'CountrySide', icon: <GiMountainCave size={24} /> },
    { id: 15, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
    { id: 16, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
    { id: 17, label: 'Cabins', icon: <MdCabin size={24} /> },
    { id: 18, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
    { id: 19, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },
    { id: 20, label: 'Amazing Pools', icon: <FaSwimmingPool size={24} /> },
];

const locationElements = [
    {
        id: 1,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80' 
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80' 
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1601880348117-25c1127a95df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' 
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80' 
            },
        ],
        location: 'karavia Golf, Rd.congo',
        days: 'Nov 5-5',
        price: '$27.37, can might',
        isNew: true, 
        rating : 4.5,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1494984858525-798dd0b282f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1593522131640-d4e54be09e4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1584709521634-a43d8bb202f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1601328305394-1a8f0be2fdc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 3.7,
    },
    {
        id: 3,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1545703399-4313b14625d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1623615413014-aff1c99e936f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1624807006615-035c55425f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 1.73,
    },
    {
        id: 4,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80'
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1599635406076-0f40532a59fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1519614356164-43acba9cb25d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/flagged/photo-1557296126-ae91316e5746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            },
        ],
        location: '',
        days: '',
        price: '$157.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 5,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1647891940243-77a6483a152e?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1587502537104-aac10f5fb6f7?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1587502537815-0c8b5c9ba39a?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Paraty, Brazil',
        days: 'Aug 1-6',
        price: '$243 CAD night',
        isNew: true,
        rating: 4.1,
    },
    {
        id: 6,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Raelington, Norway',
        days: 'Oct 9-15',
        price: '$698 CAD night',
        isNew: false,
        rating: 4.6,
    },
    {
        id: 7,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Terrasini, Italy',
        days: 'June 7-12',
        price: '$467 CAD night',
        isNew: true,
        rating: 4.7,
    },
    {
        id: 8,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1523528283115-9bf9b1699245?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1496256654245-8f3d0ef3bebe?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'San Jose, Mexico',
        days: 'Jun 11-16',
        price: '$1,767 CAD night',
        isNew: false,
        rating: 4.8,
    },
    {
        id: 9,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1486912500284-6f2462ba07ea?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Tulum, Mexico',
        days: 'Jul 1-6',
        price: '$910 CAD night',
        isNew: true,
        rating: 4.3,
    },
    {
        id: 10,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1518593929011-2b5ef6be57c7?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1526137844794-45f1041f397a?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1476209446441-5ad72f223207?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Inglis, Canada',
        days: 'Jun 12-22',
        price: '$629 CAD night',
        isNew: false,
        rating: 4.6,
    },
    {
        id: 11,
        locationImages: [
            {
                id: 1,
                url: 'https://unsplash.com/fr/photos/2gDwlIim3Uw'
            },
            {
                id: 2,
                url: 'https://unsplash.com/fr/photos/2d4lAQAlbDA'
            },
            {
                id: 3,
                url: 'https://unsplash.com/fr/photos/KQgrVfR3r74'
            },
            {
                id: 4,
                url: 'https://unsplash.com/fr/photos/9rYfG8sWRVo'
            },
        ],
        location: 'US',
        days: 'jav 7-23',
        price: '$17.999 can might',
        isNew: true,
        rating: 1.79,
    },
    {
        id: 12,
        locationImages: [
            {
                id: 1,
                url: 'https://unsplash.com/fr/photos/Siuwr3uCir0'
            },
            {
                id: 2,
                url: 'https://unsplash.com/fr/photos/RN6ts8IZ4_0'
            },
            {
                id: 3,
                url: 'https://unsplash.com/fr/photos/DH_u2aV3nGM'
            },
            {
                id: 4,
                url: 'https://unsplash.com/fr/photos/AD6rn3vqG7o'
            },
        ],
        location: 'Kinshasa, RDCongo',
        days: 'mai 5-20',
        price: '$17.999 can might',
        isNew: false,
        rating: 4.3,
    },
    {
        id: 13,
        locationImages: [
            {
                id: 1,
                url: 'https://unsplash.com/fr/photos/Wlc5n-Qi7hU'
            },
            {
                id: 2,
                url: 'https://unsplash.com/fr/photos/S1_uPZATtVs'
            },
            {
                id: 3,
                url: 'https://unsplash.com/fr/photos/dQND1WZ4pNI'
            },
            {
                id: 4,
                url: 'https://unsplash.com/fr/photos/jgrvmbvNAlY'
            },
        ],
        location: 'Kenya',
        days: 'oct 7-25',
        price: '$125.57 can might',
        isNew: true,
        rating: 2.3,
    },
    {
        id: 14,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1533387520709-752d83de3630?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Hawaii, US',
        days: 'Nov 4-20',
        price: '$777 CAD night',
        isNew: true,
        rating: 4.8,
    },
    {
        id: 15,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1544892504-5a42d285ab6f?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Lagos, Portugal',
        days: 'Sep 7-20',
        price: '$2,999 CAD night',
        isNew: true,
        rating: 4.88,
    },
    {
        id: 16,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1504870712357-65ea720d6078?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'LunenBurg, Canada',
        days: 'Oct 4-19',
        price: '$500 CAD night',
        isNew: false,
        rating: 4.2,
    },
    {
        id: 17,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1446034295857-c39f8844fad4?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1504803900752-c2051699d0e8?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1528184039930-bd03972bd974?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Santa Rosa, US',
        days: 'Jun 2-3',
        price: '$3,369 CAD night',
        isNew: false,
        rating: 4.1,
    },
    {
        id: 18,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1465147264724-326b45c3c59b?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1562095241-8c6714fd4178?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Carlux, France',
        days: 'Oct 28-Nov 7',
        price: '$2511 CAD night',
        isNew: true,
        rating: 4.5,
    },
    {
        id: 19,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1485067801970-70573e3f77d0?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Palm desert, US',
        days: 'Jun 11-16',
        price: '$3200 CAD night',
        isNew: true,
        rating: 4.7,
    },
    {
        id: 20,
        locationImages: [
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?auto=format&fit=crop&w=400&h=250&q=60',
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1494280986787-c49b328829dd?auto=format&fit=crop&w=400&h=250&q=80',
          },
          {
            id: 4,
            url: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&h=250&q=60',
          },
        ],
        location: 'Ressaca, Brazil',
        days: 'Oct 2-11',
        price: '$14,999 CAD night',
        isNew: false,
        rating: 4.5,
    },
]