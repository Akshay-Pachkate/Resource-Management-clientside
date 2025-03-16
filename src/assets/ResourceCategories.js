export const ResourceCategories = {
    "Auditoriums": ["Auditorium", "IT Seminar Hall", "COMP Seminar Hall" , "ENTC Seminar Hall"],
    "Classrooms & Labs": {
        "A1":[201, 202, 203, 204],
        "A2":[102, 103, 104, 105],
        "A3":[304, 306, 307, 308],
        "F":[403, 404, 206]
    },
    "Display Boards": ["F Building Display", "A1 Building Display"], 
    "Logistics": ["Mic", "Podium", "Camera"], 
    "Lawn & Court": ["Lawn", "basketball court"]
};

export const AllResources = [
    {res: 'Auditorium', type: 'Auditoriums', location: 'F1-101', capacity: 150, imgUrl: '/images/auditorium.jpg'},
    {res: 'IT Seminar Hall', type: 'Auditoriums', location: 'A3-110', capacity: 100, imgUrl: '/images/it-sh.jpg'},
    {res: 'COMP Seminar Hall', type: 'Auditoriums', location: 'A1-109', capacity: 100, imgUrl: '/images/comp-sh.jpg'},
    {res: 'ENTC Seminar Hall', type: 'Auditoriums', location: 'A3-108', capacity: 100, imgUrl: '/images/it-sh.jpg'},
    {res: 'F Building Display', type: 'Display Boards', location: 'F Building', imgUrl: '/images/a1-db.jpg'},
    {res: 'A1 Building Display', type: 'Display Boards', location: 'A1 Building', imgUrl: '/images/a1-db.jpg'},
    {res: 'Lawn', type: 'Lawn', imgUrl: '/images/lawn.jpg'},
    {res: 'basketball court', type: 'Court', imgUrl: '/images/court.jpg'},
    {res: 'Mic', type: 'Logistics', imgUrl: '/images/mic.jpg'},
    {res: 'Podium', type: 'Logistics', imgUrl: '/images/podium.jpg'},
    {res: 'Camera', type: 'Logistics', imgUrl: '/images/camera.jpg'},
];



export const ResourceTypes = [
    'Auditoriums',
    'Display Boards',
    'Lawn',
    'Logistics',
    'Classrooms',
    'Court'
];