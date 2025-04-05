import React, { useState } from 'react';
import Header from './components/Header';
import {Box, BulletList, HighlightNumber} from './components/Box';
import Modal from './components/Modal';
import { useModal} from "./context/ModalContext";
import {BookOpenIcon, ClockIcon, GlobeIcon, LayersIcon, UserIcon, UsersIcon,} from "lucide-react";
import {
    modalContentAcrossIndustries, modalContentFlash,
    modalContentMethodsAndExperienced,
    modalContentServicesAndSupport
} from "./data/boxes";
import Fish from './images/fish.svg'


export function App() {

    const { modalContent, openModal, closeModal } = useModal();

    const handleOpenModal = (title: string, content: React.ReactNode) => {
        openModal(title, content);
    };

    return (

        <div className="bg-blue-50 min-h-screen w-full p-4">
            {/* Header */}
            <Header/>
            <div className="w-full h-0.5 bg-gradient-to-r from-blue-900 via-red-500 to-blue-900 mb-6"></div>
            {/* Main content - Grid of boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mt-[22rem] md:mt-0">
                {/* Across Industries */}
                <Box icon={<GlobeIcon size={24} />} title="across industries"
                     onClick={() => handleOpenModal('across industries', modalContentAcrossIndustries)}
                >
                    <HighlightNumber
                        value="> 300"
                        description="references worldwide across all sectors"
                    />
                </Box>
                {/* World-wide Buyers network */}
                <Box
                    icon={<UsersIcon size={24} />}
                    title="world-wide Buyers network"
                    onClick={() => handleOpenModal('world-wide Buyers network', modalContentAcrossIndustries)}
                >
                    <div className="text-center">
                        <div className="text-gray-600 mb-1">« living base » of</div>
                        <HighlightNumber value="> 50,000" description="buyers" />
                    </div>
                </Box>
                {/* Methods & Tools */}
                <Box icon={<div size={24} />} title="methods & tools"
                     onClick={() => handleOpenModal('methods & tools', modalContentMethodsAndExperienced)}
                >
                    <BulletList items={['proprietary & customized', 'benchmarking']} />
                </Box>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6 ">
                {/* Global */}
                <div className="md:col-span-3">
                    <Box icon={<GlobeIcon size={24} />}
                        title="global"
                         onClick={() => handleOpenModal('global', modalContentAcrossIndustries)}
                    >
                        <div className="text-center">
                            <p className="text-gray-600">
                                all regions and cultures worldwide
                            </p>
                        </div>
                    </Box>

                </div>
                {/* Central Services Box */}
                <div className="absolute top-[9rem] left-4 w-[93%] md:relative md:col-span-6 md:top-0 md:left-0 md:w-full"
                     onClick={() => handleOpenModal('HR Services & Support', modalContentServicesAndSupport)}>
                    <Box variant="central" size="large">
                        <div className="text-center mb-4">
                            <h2 className="text-red-600 font-bold text-xl mb-1">
                                HR Services & Support
                            </h2>
                            <h3 className="text-blue-700 font-medium text-lg">
                                Purchasing & Procurement
                            </h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="text-blue-700">
                                   <img src={Fish} className="w-6 h-6 "/>
                                </div>
                                <div>
                                    <span className="text-red-600 font-semibold">A</span>
                                    <span className="text-blue-800 font-semibold">ssessment</span>
                                    <span className="text-gray-600 ml-2">(Skills & Teams)</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-blue-700"> <img src={Fish} className="w-6 h-6 "/></div>
                                <div>
                                    <span className="text-red-600 font-semibold">R</span>
                                    <span className="text-blue-800 font-semibold">
                    ecruitment
                  </span>
                                    <span className="text-gray-600 ml-2">
                    (Permanent & Temporary)
                  </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-blue-700"> <img src={Fish} className="w-6 h-6 "/></div>
                                <div>
                                    <span className="text-red-600 font-semibold">T</span>
                                    <span className="text-blue-800 font-semibold">raining</span>
                                    <span className="text-gray-600 ml-2">
                    (Leadership & Soft skills)
                  </span>
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
                {/* Experienced */}
                <div className="md:col-span-3">
                    <Box icon={<ClockIcon size={24} />} title="experienced"
                         onClick={() => handleOpenModal('experienced', modalContentMethodsAndExperienced)}
                    >
                        <div className="text-center">
                            <p className="text-gray-600 mb-2">specialized service for</p>
                            <HighlightNumber value="> 23" description="years" />
                        </div>
                    </Box>
                    <Box variant="alert" className="mt-4 text-center"
                         onClick={() => handleOpenModal('Flash', modalContentFlash)}>
                        <h3 className="font-bold text-xl">Flash - stay tuned</h3>
                        <p>Soon to come</p>
                    </Box>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Diversity */}
                <Box icon={<UserIcon size={24} />} title="diversity"
                     onClick={() => handleOpenModal('diversity', modalContentMethodsAndExperienced)}>
                    <p className="mb-2">Links & bridges to emerging countries:</p>
                    <BulletList
                        items={[
                            'young talent',
                            'entrepreneurship',
                            'PE firms & Finance',
                            'social entrepreneurship',
                        ]}
                    />
                </Box>
                {/* All levels and expertise fields */}
                <Box
                    icon={<LayersIcon size={24} />}
                    title="all levels and expertise fields"
                    onClick={() => handleOpenModal('all levels and expertise fields', modalContentAcrossIndustries)}
                >
                    <BulletList
                        items={[
                            'Executive (CPO)',
                            'Management',
                            'Buyers',
                            'Experts / Consultants',
                        ]}
                    />
                </Box>
                {/* Partners in Academia */}
                <Box icon={<BookOpenIcon size={24} />} title="Partners in Academia"
                     onClick={() => handleOpenModal('Partners in Academia', modalContentMethodsAndExperienced)}
                >
                    <p className="mb-2">
                        Actively connected with global research & publications (EHA, IPSERA)
                        & global/national associations
                    </p>
                </Box>
            </div>
            <Modal isOpen={modalContent.isOpen} onClose={closeModal} title={modalContent.title}>
                {modalContent.content}
            </Modal>
        </div>


        )


}