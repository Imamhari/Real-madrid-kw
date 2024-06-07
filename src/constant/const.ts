export const NAV_ITEM =[
    {
        url: '#',
        name: 'Madridistas',
    },
    {
        url: '#',
        name: 'Tickets',
    },
    {
        url: '#',
        name: 'Hospitality',
    },
    {
        url: '#',
        name: 'Tickets',
    },
    {
        url: '#',
        name: 'Tour',
    },
    {
        url: '#',
        name: 'Shop',
    },
    {
        url: '#',
        name: 'RM Play',
    }
]

export const ITEM_NEWS = [
    {
        img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--381176fe-2a46-4cf7-9e83-45cd6f6827fc/ND_PREVIA_GRANADA_RM_01_ALEGRIA_BELLINGHAM_VINICIUS_HE17713.app.png?preferwebp=true&width=1440',
        title: 'Granada-Real Madrid: the league champions look to round off a perfect week'
    },
    {
        img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--33899593-40f4-42c0-a804-c4529c8ec244/ND_RP_ANCELOTTI_1PC0835.app.png?preferwebp=true&width=350',
        title: 'Ancelotti: “These games will help us prepare for the Champions League final” '
    },
    {
        img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--1fb7b9b9-8a2c-495d-82ae-785fbbc6defa/ND_LIGA_J20_GETAFE_RM_ALEGRIA_JOSELU_HE13194.app.png?preferwebp=true&width=350',
        title: 'Real Madrid squad for Granada clash'
    },
    {
        img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--1552d865-62de-4261-8055-b787c5a9aa7d/ND_LIGA_RM_CADIZ_ALEGRIA_FINAL_HE21299.app.png?preferwebp=true&width=350',
        title: 'Real Madrid to present their 36th LaLiga trophy'
    },
    {
        img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--0e988685-7071-444d-9f72-0dbb9175b92a/_330778209928.app.png?preferwebp=true&width=400',
        title: 'We won our sixth European Cup 58 years old'
    },
    {
        img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--0aefe065-a0dc-4d42-947c-ebd8b008c132/ND_LIGA_RM_CADIZ_COURTOIS_02_JT10078.app.png?preferwebp=true&width=400',
        title: 'Courtois turns 32'
    },
    {
        img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--7ce1591a-14a9-4085-89b1-ee75867e8ead/ND_LIGA_ENDESA_VALENCIA_RM_01_RS558671.app.png?preferwebp=true&width=350',
        title: '99-93 Real Madrid loses in Valencia'
    },
    {
        img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--1f48098c-f876-4f5d-8aa4-29de4da4e65b/ND_LIGA_ENDESA_J16_RM_VALENCIA_LLULL_1PC2463.app.png?preferwebp=true&width=400',
        title: 'Llull plays his 600th LaLiga game for Real Madrid'
    }
]

interface Event{
    logoTeamHome: string,
    logoTeamAway: string,
    nameTeamHome: string,
    nameTeamAway: string,
    competitionType: 'UCL' | 'LaLiga',
    steps: string,
    date: string,
    stadium: string
  }

export const NEXT_EVENT : Event[] = [
    {
    logoTeamHome:
        "https://cdn.freebiesupply.com/logos/large/2x/real-madrid-c-f-logo-png-transparent.png",
    logoTeamAway: 
        "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--de3f6087-2031-4d33-b321-871e0f7ff532/dt4pinj0vw0t0cvz7za6mhmzy.app.png?preferwebp=true&width=144&height=144", 
    nameTeamHome: "Real Madrid", 
    nameTeamAway: "Dortmund", 
    competitionType: "UCL", 
    steps: "Match week 21", 
    date: "2022-11-23",
    stadium: "Santiago Bernabeu"
    },
    {
        logoTeamHome:
        "https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png",
        logoTeamAway:
        "https://cdn.freebiesupply.com/logos/large/2x/real-madrid-c-f-logo-png-transparent.png",
        nameTeamHome: "Barcelona",
        nameTeamAway: "Real Madrid",
        competitionType: "LaLiga",
        steps: "Final",
        date: "2023-1-23",
        stadium: "Santiago Bernabeu"
    }
]