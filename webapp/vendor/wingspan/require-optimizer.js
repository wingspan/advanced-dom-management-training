define([
    // All page entry points must be listed here manually
    'tmf/page/UserHome/UserHomePage',
    'tmf/page/StudyHome/StudyHomePage',
    'tmf/page/StudyList/SsdlPage',
    'tmf/page/Document/DocumentPage',
    'tmf/page/EmptyPage/EmptyPage',

    // Each component in the component registry must be listed manually
    'tmf/uicomponent/uploading/UploadingComponent',
    'tmf/uicomponent/Header/HeaderComponent',
    'tmf/uicomponent/StudyNav/StudyNavComponent',
    'tmf/uicomponent/Document/DocumentComponent',
    'tmf/uicomponent/Home/HomeComponent',
    'tmf/uicomponent/FacetedDocumentList/FacetedDocumentListComponent',
    'tmf/uicomponent/StudyHome/StudyHomeComponent',
    'tmf/uicomponent/Tutorial/TutorialComponent'
], function () {
    'use strict';

    // This module should never actually be used.  It exists only to collect all of the top-level modules into one
    // place so that the require optimizer can do a single-page optimization across the entire application
    //
    // It also must collect all of the items from the component registry.  They are needed because they do not
    // have any "hard" require references that the optimizer can see.
    //
    // Specifically, parameters to the container function do not need to be declared, and this body should not do anything
    return {};
});
