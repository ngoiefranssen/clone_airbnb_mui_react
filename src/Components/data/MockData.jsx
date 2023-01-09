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

const locationsElements = [
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
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 6,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 7,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 8,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: ''
            },
            {
                id: 2,
                url: ''
            },
            {
                id: 3,
                url: ''
            },
            {
                id: 4,
                url: ''
            },
        ],
        location: '',
        days: '',
        price: '$17.999 can might',
        isNew: '',
        rating: 2.7,
    },
]