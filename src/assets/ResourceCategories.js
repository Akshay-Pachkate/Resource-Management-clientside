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
    {res: 'Auditorium', type: 'Auditoriums'},
    {res: 'IT Seminar Hall', type: 'Auditoriums'},
    {res: 'COMP Seminar Hall', type: 'Auditoriums'},
    {res: 'ENTC Seminar Hall', type: 'Auditoriums'},
    {res: 'F Building Display', type: 'Display Boards'},
    {res: 'A1 Building Display', type: 'Display Boards'},
    {res: 'Lawn', type: 'Lawn'},
    {res: 'basketball court', type: 'Court'},
    {res: 'Mic', type: 'Logistics'},
    {res: 'Podium', type: 'Logistics'},
    {res: 'Camera', type: 'Logistics'},
];



export const ResourceTypes = [
    'Auditoriums',
    'Display Boards',
    'Lawn',
    'Logistics',
    'Classrooms',
    'Court'
];