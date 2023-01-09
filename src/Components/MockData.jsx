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

const locations = [
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
                    id: 1
                }
            ],
            location: '',
            days: '',
            price: '$17.999 can might',
            isNew: ''
        }
    ]