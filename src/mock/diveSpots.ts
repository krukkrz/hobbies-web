import {DiveSpot} from "../dive-spots/types";

export const mockFetchDiveSpots: DiveSpot[] = [
    {
        id: '1',
        name: 'El Cabron',
        link: 'https://www.grancanariadivers.com/dive-sites/el-cabron/',
        country: 'ES',
        when: '22-04-2022',
        divesNumber: 2,
        deep: 22,
        weigh: 5,
        coolness: "super cool!",
        photo: 'https://www.grancanariadivers.com/wp-content/uploads/2018/01/gran-canaria-dive-sites-el-cabron.jpg',
    },
    {
        id: '2',
        name: 'Los Eras',
        link: 'https://www.dailydive.com/dive-sites/spain/las-eras',
        country: 'ES',
        when: '22-04-2022',
        divesNumber: 2,
        deep: 22,
        weigh: 5,
        coolness: "super cool!",
        photo: 'https://www.blackstonedivecenter.com/wp-content/uploads/2018/03/Las-Eras-budda-2.jpg',
    }
]