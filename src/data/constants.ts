export interface Places {
    image: string,
    name: string
}
export const places: Places[] = [
    {
        image: "https://www.fabhotels.com/blog/wp-content/uploads/2021/01/Nainital_600x400.jpg",
        name: "Nainital"
    },
    {
        image: "https://www.rishikeshtourism.in/images/banner-3.jpg",
        name: "rishikesh"
    }, {
        image: "https://dims.apnews.com/dims4/default/b2c6bd5/2147483647/strip/true/crop/7582x5055+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F8c%2Fad%2Fa087e7eba4940cbc9cd6e439b9ad%2Fca0758940c064f29abf1622babb2b92b",
        name: "ayodhya"
    },

    {
        image: "https://uttarakhandtourism.gov.in/sites/default/files/2020-07/shutterstock_1232723581.jpg",
        name: "Almora"
    },
    {
        image: "https://www.happytrips.com/photo/49335807.cms",
        name: "Haridwar"
    },
    // {
    //     image: "https://static.toiimg.com/photo/104466324.cms",
    //     name: "jim corbett national park"
    // },
    // {
    //     image: "https://www.euttaranchal.com/tourism/photos/munsiyari-2563173.jpg",
    //     name: "Munsiyari"
    // },



]


export interface Hotels {
    image: string,
    name: string
    rating: number
}

export const hotels: Hotels[] = [
    {
        image: "https://a0.muscache.com/im/pictures/c6b8a3a0-50e2-4645-ae11-3bb7809a4baa.jpg?im_w=1200",
        name: "Mountain Wrapped",
        rating: 3.5
    },
    {
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-665015970482989205/original/418f18b6-5dd4-4f5d-b381-97c05acc2035.jpeg?im_w=1200",
        name: "The Blue House",
        rating: 4.1
    },
    {
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-52431193/original/08ccedc4-06c4-4cd0-bc1c-73868f1b2c48.jpeg?im_w=1200",
        name: "The HoneyComb",
        rating: 2
    },
    {
        image: "https://a0.muscache.com/im/pictures/bce4ba91-39b4-4620-8643-bacba0d17a73.jpg?im_w=1200",
        name: "O'NEST",
        rating: 4.5
    },
    {
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODQ1ODU5ODM5MDk5NTEwOTQx/original/5631dc39-5747-441e-a2d4-0311c0f4181f.jpeg?im_w=720",
        name: "RiverScape Cabin",
        rating: 3
    },
    {
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-765673312810778311/original/297399d7-3d12-4b8b-aa88-21dded609c00.jpeg?im_w=1200",
        name: "StayVista",
        rating: 3.9
    },
    {
        image: "https://a0.muscache.com/im/pictures/0232ca33-2ce0-41d9-b900-3697b974591e.jpg?im_w=1200",
        name: "Harrys - Patio ",
        rating: 5
    },
    {
        image: "https://a0.muscache.com/im/pictures/185705a3-3bc1-459d-9f8a-c551aeff490f.jpg?im_w=1200",
        name: "The barn - A Farm Cottage",
        rating: 4.89
    },
]