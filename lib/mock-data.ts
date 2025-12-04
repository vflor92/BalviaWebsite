export interface Property {
    id: string;
    name: string;
    image: string;
    location: string;
    investmentAmount: number;
    currentValue: number;
    status: 'Under Construction' | 'Leasing' | 'Stabilized';
    expectedReturn: string;
    occupancy?: string;
}

export interface Distribution {
    id: string;
    date: string;
    amount: number;
    property: string;
    type: 'Quarterly' | 'Annual';
}

export interface Document {
    id: string;
    name: string;
    property: string;
    category: 'Financial Statements' | 'Distribution Reports' | 'Tax Documents' | 'Operating Reports';
    date: string;
    size: string;
}

export const mockProperties: Property[] = [
    {
        id: '1',
        name: 'Premier at Katy',
        image: '/projects/premier-at-katy.jpg',
        location: 'Katy, TX',
        investmentAmount: 2500000,
        currentValue: 2750000,
        status: 'Stabilized',
        expectedReturn: '12.5% IRR',
        occupancy: '94%'
    },
    {
        id: '2',
        name: 'Premier at Morton Ranch',
        image: '/projects/premier-at-morton-ranch.jpg',
        location: 'Katy, TX',
        investmentAmount: 3200000,
        currentValue: 3400000,
        status: 'Under Construction',
        expectedReturn: '14.2% IRR',
        occupancy: 'Opening Q1 2026'
    },
    {
        id: '3',
        name: 'Regalia Bella Terra',
        image: '/projects/regalia-bella-terra.jpg',
        location: 'Richmond, TX',
        investmentAmount: 1800000,
        currentValue: 1950000,
        status: 'Leasing',
        expectedReturn: '11.8% IRR',
        occupancy: '87%'
    }
];

export const mockDistributions: Distribution[] = [
    { id: '1', date: '2024-12-01', amount: 45000, property: 'Premier at Katy', type: 'Quarterly' },
    { id: '2', date: '2024-12-01', amount: 32000, property: 'Regalia Bella Terra', type: 'Quarterly' },
    { id: '3', date: '2024-09-01', amount: 44500, property: 'Premier at Katy', type: 'Quarterly' },
    { id: '4', date: '2024-09-01', amount: 31000, property: 'Regalia Bella Terra', type: 'Quarterly' },
    { id: '5', date: '2024-06-01', amount: 43000, property: 'Premier at Katy', type: 'Quarterly' },
    { id: '6', date: '2024-06-01', amount: 29500, property: 'Regalia Bella Terra', type: 'Quarterly' },
];

export const mockDocuments: Document[] = [
    { id: '1', name: 'Q4 2024 Financial Statement', property: 'Premier at Katy', category: 'Financial Statements', date: '2024-12-15', size: '2.4 MB' },
    { id: '2', name: 'Q4 2024 Distribution Report', property: 'Premier at Katy', category: 'Distribution Reports', date: '2024-12-01', size: '1.1 MB' },
    { id: '3', name: '2024 K-1 Tax Document', property: 'Premier at Katy', category: 'Tax Documents', date: '2024-11-30', size: '856 KB' },
    { id: '4', name: 'November 2024 Operating Report', property: 'Premier at Katy', category: 'Operating Reports', date: '2024-11-30', size: '1.8 MB' },
    { id: '5', name: 'Q4 2024 Financial Statement', property: 'Regalia Bella Terra', category: 'Financial Statements', date: '2024-12-15', size: '2.1 MB' },
    { id: '6', name: 'Q4 2024 Distribution Report', property: 'Regalia Bella Terra', category: 'Distribution Reports', date: '2024-12-01', size: '980 KB' },
    { id: '7', name: 'Construction Progress Report', property: 'Premier at Morton Ranch', category: 'Operating Reports', date: '2024-12-10', size: '3.2 MB' },
    { id: '8', name: 'Q3 2024 Financial Statement', property: 'Premier at Morton Ranch', category: 'Financial Statements', date: '2024-09-30', size: '1.9 MB' },
];

export const portfolioSummary = {
    totalInvested: mockProperties.reduce((sum, p) => sum + p.investmentAmount, 0),
    currentValue: mockProperties.reduce((sum, p) => sum + p.currentValue, 0),
    totalProperties: mockProperties.length,
    ytdDistributions: mockDistributions
        .filter(d => new Date(d.date).getFullYear() === 2024)
        .reduce((sum, d) => sum + d.amount, 0)
};
