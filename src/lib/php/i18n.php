<?php

function abt_generate_translations() {
    $ABT_i18n = (object)[
        'referenceList' => [],
        'tinymce' => (object)[],
        'peerReviewMetabox' => [],
        'fieldmaps' => (object)[],
        'citationTypes' => [],
    ];

    $ABT_i18n->referenceList = [
        'referenceList' => [
            'tooltips' => [
                'insert' => __('Insert selected references', 'academic-bloggers-toolkit'),
                'add' => __('Add reference to reference list', 'academic-bloggers-toolkit'),
                'remove' => __('Remove selected references from reference list', 'academic-bloggers-toolkit'),
                'pin' => __('Pin reference list to visible window', 'academic-bloggers-toolkit'),
            ],
            'citedItems' => __('Cited Items', 'academic-bloggers-toolkit'),
            'uncitedItems' => __('Uncited Items', 'academic-bloggers-toolkit'),
            'noBibAlertWarning' => __('Cannot create publication list for currently selected citation style.', 'academic-bloggers-toolkit'),
            'noBibAlertReason' => __('Style does not include bibliography.', 'academic-bloggers-toolkit'),
        ],
        'menu' => [
            'tooltips' => [
                'importRIS' => __('Import references from RIS file', 'academic-bloggers-toolkit'),
                'refresh' => __('Refresh reference list', 'academic-bloggers-toolkit'),
                'destroy' => __('Delete all references', 'academic-bloggers-toolkit'),
                'help' => __('Usage instructions', 'academic-bloggers-toolkit'),
                'staticPubList' => __('Insert Static Publication List', 'academic-bloggers-toolkit'),
            ],
            'stylePlaceholder' => __('Choose citation style...', 'academic-bloggers-toolkit'),
        ],
    ];

    $ABT_i18n->tinymce->importWindow = [
        'title' => __('Import References from RIS File', 'academic-bloggers-toolkit'),
        'filetypeError' => __("The file could not be processed. Are you sure it's a .RIS (Refman) file?", 'academic-bloggers-toolkit'),
        'leftovers' => __('The following references were unable to be processed', 'academic-bloggers-toolkit'),
        'upload' => __('Choose File', 'academic-bloggers-toolkit'),
        'importBtn' => __('Import', 'academic-bloggers-toolkit'),
    ];

    $ABT_i18n->tinymce->pubmedWindow = [
        'title' => __('Search PubMed for Reference', 'academic-bloggers-toolkit'),
        'search' => __('Search', 'academic-bloggers-toolkit'),
        'next' => __('Next', 'academic-bloggers-toolkit'),
        'previous' => __('Previous', 'academic-bloggers-toolkit'),
        'addReference' => __('Select', 'academic-bloggers-toolkit'),
        'viewReference' => __('View', 'academic-bloggers-toolkit'),
    ];

    $ABT_i18n->tinymce->referenceWindow = [
        'referenceWindow' => [
            'title' => __('Add Reference', 'academic-bloggers-toolkit'),
        ],
        'people' => [
            'add' => __('Add Contributor', 'academic-bloggers-toolkit'),
            'contributors' => __('Contributors', 'academic-bloggers-toolkit'),
            'surname' => __('Surname', 'academic-bloggers-toolkit'),
            'given' => __('Given Name, M.I.', 'academic-bloggers-toolkit'),
        ],
        'manualEntryContainer' => [
            'citationType' => __('Citation Type', 'academic-bloggers-toolkit'),
            'autocite' => __('Autocite', 'academic-bloggers-toolkit'),
            'URL' => __('URL', 'academic-bloggers-toolkit'),
            'ISBN' => __('ISBN', 'academic-bloggers-toolkit'),
            'search' => __('Search', 'academic-bloggers-toolkit'),
        ],
        'identifierInput' => [
            'label' => __('PMID/DOI', 'academic-bloggers-toolkit'),
        ],
        'buttonRow' => [
            'pubmedWindowTitle' => __('Search PubMed for Reference', 'academic-bloggers-toolkit'),
            'addManually' => __('Add Manually', 'academic-bloggers-toolkit'),
            'addWithIdentifier' => __('Add with Identifier', 'academic-bloggers-toolkit'),
            'searchPubmed' => __('Search PubMed', 'academic-bloggers-toolkit'),
            'addReference' => __('Add Reference', 'academic-bloggers-toolkit'),
            'insertInline' => __('Insert citation inline', 'academic-bloggers-toolkit'),
        ],
    ];

    require_once(dirname(__FILE__) . '/fieldmaps.php');

    return $ABT_i18n;
}
