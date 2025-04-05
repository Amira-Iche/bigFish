import React, { ReactNode } from 'react';
import { useModal } from '../context/ModalContext';

type SectionItem = {
    title: string;
    description: string;
};

const createListModalContent = (items: SectionItem[]): React.ReactNode => (
    <div>

        <ul className="list-disc pl-5 mt-2">
            {items.map((item, index) => (
                <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="mb-4">{item.description}</p>

                </div>

            ))}
        </ul>
    </div>
);

const createTitledListModalContent = (
    description: string,
    title: string,
    items: string[]
): ReactNode => (
    <div>
        <p className="mb-4">{description}</p>
        <p className="font-bold">{title}</p>
        <ul className="list-disc pl-5 mt-2">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

// === Shared modal content definitions ===
 export const modalContentServicesAndSupport = createTitledListModalContent(
    '',
    'The ART of People Development',
    [
        '360° Assessment and Benchmarking of skills & talents, actions and\n' +
        'perceptions in line with impact targets (P&P teams, clients, suppliers)',
        'Sourcing, Attraction and Recruitment of local and/or global talent in line\n' +
        'with target profiles and requirements – for permanent and temporary roles',
        'Training and Skills & Team Development for an effective action and impact\n' +
        'as recognized Business Partners across stakeholders, levels and cultures',

    ]
);

export const modalContentAcrossIndustries = createListModalContent(
    [
        {
            title: 'We work across industries and sectors',
            description: 'We have over 300 references in Corporate organizations as well as family owned large PME/ETI',
        },
        {
            title: 'We intervene across the globe',
            description: 'in all main regions world-wide via our own regional hubs and/or local specialized partners',
        },
        {
            title: 'We address all P&P role levels',
            description: 'from Executive (CPO, Senior VP) via Management to Buyers and Consultants',
        },
        {
            title: 'We intervene in and for all areas of P&P expertise',
            description: 'from Category to Project Management to P&P Excellence and Transformation to Collaborative Ecosystems',
        },
        {
            title: 'We manage a « living » base of over 50 000 buyers',
            description: 'across industries, regions and levels – soon to be developed into a global community',
        },
    ]
);

export const modalContentMethodsAndExperienced = createListModalContent(
    [
        {
            title: 'We come from P&P (Purchasing & Procurement)',
            description: 'We have redefined HR services for P&P Professionals and organizations from and for concrete field experience',
        },
        {
            title: 'We have been operating for over 23 years',
            description: 'continuously improving our approach and services via practical application and experience in the field',
        },
        {
            title: 'We are developing our own methods & tools',
            description: 'To help assessing and developing P&P skills, teams & organizations, with a strong focus on soft and leadership skills',
        },
        {
            title: 'We are in constant contact and exchange with key partners in research and Academia',
            description: 'via our partnerships with leading Research Centers (members of ' +
                'IPSERA) and Training institutions (leading Masters in P&P and\n' +
                'Supply Chain management in France and Europe), as well as\n' +
                'national/international P&P associations and federations (CNA,\n' +
                'BME, IFPSM, …)',
        },
        {
            title: 'We actively build bridges and links to other « worlds »',
            description: 'Allowing to develop exchanges, development opportunities and\n' +
                'continuous knowledge and impact improvement beyond\n' +
                'traditional borders',
        },
    ]
);

export const modalContentFlash = createListModalContent(
    [
        {
            title: 'We come from P&P (Purchasing & Procurement)',
            description: 'We have redefined HR services for P&P Professionals and organizations from and for concrete field experience',
        },
        {
            title: 'We have been operating for over 23 years',
            description: 'continuously improving our approach and services via practical application and experience in the field',
        },
        {
            title: 'We are developing our own methods & tools',
            description: 'To help assessing and developing P&P skills, teams & organizations, with a strong focus on soft and leadership skills',
        },
        {
            title: 'We are in constant contact and exchange with key partners in research and Academia',
            description: 'via our partnerships with leading Research Centers (members of ' +
                'IPSERA) and Training institutions (leading Masters in P&P and\n' +
                'Supply Chain management in France and Europe), as well as\n' +
                'national/international P&P associations and federations (CNA,\n' +
                'BME, IFPSM, …)',
        },
        {
            title: 'We actively build bridges and links to other « worlds »',
            description: 'Allowing to develop exchanges, development opportunities and\n' +
                'continuous knowledge and impact improvement beyond\n' +
                'traditional borders',
        },
    ]
);



// === HR Services modal triggers (use inside a component with ModalContext) ===


// === Main boxes array ===
export const useBoxes = () => {

    const { openModal } = useModal();

    const serviceItems = [
        {
            letter: 'A',
            title: 'ssessment',
            subtitle: '(Skills & Teams)',
        },
        {
            letter: 'R',
            title: 'ecruitment',
            subtitle: '(Permanent & Temporary)',
        },
        {
            letter: 'T',
            title: 'raining',
            subtitle: '(Leadership & Soft skills)',
        }
    ];



    return  [
        {
            title: 'across industries',
            icon: 'globe',
            className: 'md:order-1',
            content: (
                <div className="text-center mt-4">
                    <div className="text-blue-800 text-2xl font-bold">&gt; 300</div>
                    <div className="text-gray-600">
                        references worldwide
                        <br />
                        across all sectors
                    </div>
                </div>
            ),
            modalContent: modalContentAcrossIndustries
        },
        {
            title: 'world-wide Buyers network',
            icon: 'users',
            className: 'md:order-2',
            content: (
                <div className="text-center mt-4">
                    <div className="text-gray-600">« living base » of</div>
                    <div className="text-blue-800 text-2xl font-bold">&gt; 50,000</div>
                    <div className="text-gray-600">buyers</div>
                </div>
            ),
            modalContent: modalContentAcrossIndustries
        },
        {
            title: 'methods & tools',
            icon: 'tool',
            className: 'md:order-3',
            content: (
                <div className="mt-4">
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="h-2 w-2 bg-blue-800 rounded-full mr-2"></span>
                            proprietary & customized
                        </li>
                        <li className="flex items-center">
                            <span className="h-2 w-2 bg-blue-800 rounded-full mr-2"></span>
                            benchmarking
                        </li>
                    </ul>
                </div>
            ),
            modalContent: modalContentMethodsAndExperienced
        },
        {
            title: 'global',
            icon: 'globe',
            className: 'h-full md:order-4 grid-rows-4',
            content: (
                <div className="text-center mt-4">
                    <div className="text-gray-600">
                        all regions and
                        <br />
                        cultures worldwide
                    </div>
                </div>
            ),
            modalContent: modalContentAcrossIndustries
        },
        {
            variant: 'service' as const,
            title: 'HR Services & Support',
            subtitle: 'Purchasing & Procurement',
            className: 'md:order-5 grid-rows-4',

            serviceItems,
            modalContent: modalContentServicesAndSupport
        },
        {
            title: 'experienced',
            icon: 'clock',
            className: 'h-full md:order-6',
            content: (
                <div className="text-center mt-4">
                    <div className="text-gray-600">specialized service<br />for</div>
                    <div className="text-blue-800 text-2xl font-bold">&gt; 23</div>
                    <div className="text-gray-600">years</div>
                </div>
            ),
            modalContent: modalContentMethodsAndExperienced
        },
        {
            title: '',
            icon: '',
            className: 'h-full md:order-6',
            content: (
                <div className="text-center mt-4 bg-red">

                    <div className="text-blue-800 text-2xl font-bold">Flash - stay tuned Soon to come</div>

                </div>
            ),
            modalContent: modalContentMethodsAndExperienced
        },

        {
            title: 'diversity',
            icon: 'diversity',
            className: 'md:order-7',
            content: (
                <div className="mt-3">
                    <p className="mb-2">Links & bridges to emerging countries:</p>
                    <ul className="space-y-2">
                        {['young talent', 'entrepreneurship', 'PE firms & Finance', 'social entrepreneurship'].map(item => (
                            <li key={item} className="flex items-center">
                                <span className="h-2 w-2 bg-blue-800 rounded-full mr-2"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ),
            modalContent: modalContentMethodsAndExperienced
        },
        {
            title: 'all levels and expertise fields',
            icon: 'layers',
            className: 'md:order-8',
            content: (
                <div className="mt-3">
                    <ul className="space-y-2">
                        {['Executive (CPO)', 'Management', 'Buyers', 'Experts / Consultants'].map((label, idx) => (
                            <li key={idx} className={`flex items-center ${label !== 'Executive (CPO)' ? 'ml-4' : ''}`}>
                                <span className="h-2 w-2 bg-blue-800 rounded-full mr-2"></span>
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            ),
            modalContent: modalContentAcrossIndustries
        },
        {
            title: 'Partners in Academia',
            icon: 'graduation',
            className: 'md:order-9',
            content: (
                <div className="mt-3">
                    <p className="text-sm">
                        Actively connected with global research & publications (EHA, IPSERA)
                        & global/national associations
                    </p>
                </div>
            ),
            modalContent: modalContentMethodsAndExperienced
        }
    ];

}


