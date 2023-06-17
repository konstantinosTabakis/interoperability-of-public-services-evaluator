const translations = {
    en: {
        content: {
            menu_home: 'Home',
            menu_survey: 'Survey',
            menu_about: 'About',
            homepage_title: 'Interoperability of Public Services Evaluator',
            homepage_text: 'The interoperability evaluator is a self assessment tool that provides an easy and fast way to understand the level of interoperability of a public service.',
            homepage_cta: 'Start Survey',
            about_heading: 'About',
            about_par1: 'The Interoperability of Public Services Evaluator is an application that was created in framework of my thesis as a final project of my studies in Hellenic Open University. The application is a self assesment survey offers an easy way to check the level of maturity of interoperability of a public service and is based on the new greek Interoperability framework.',
            about_par2: 'Various technologies were used for this project. The original design of the application was created in Figma and also the graphics that were used in development. The application was build with React.js and also Firebase. Sass was used for the styling of the page.',
            about_par3: 'You can reach out on',
            about_par4: 'Thanks for stopping by!',
            about_btn1: 'Home',
            about_btn2: 'Start Survey',
            survey_title: 'Interoperability of Public Services Evaluator',
            survey_label:['Never','Slightly','A bit','Average','A lot','Totally'],
            // survey_label:['No answer','Not at all','Partially','Moderately','Quite','Fully'],
            survey_cta: 'Submit',
            results_label: 'Total',
            results_title: 'Results',
            results_level: 'Maturity level:',
            results_help_title: 'Recommended Resources',
            results_help_link_text: 'Download the New Greek Interoperability Framework',
            results_help_link: 'here',
            results_help_subtitle: 'Also these are some recommended tools for developers',

            
        },
        questions: [
            {
                id: 1,
                question: 'Does the Integrated Public Service produce high-value data that it makes available as open data?',
                type: 'Not implemented'
            },
            {
                id: 2,
                question: 'Is the Integrated Public Service development based on open specifications?',
                type: 'Not implemented'
            },
            {
                id: 3,
                question: 'Has there been consultation with companies in the field regarding the specifications?',
                type: 'Not implemented'
            },
            {
                id: 4,
                question: 'Has provision been made for the systematic recording and publication of the procedures that support the Integrated Public Service?',
                type: 'Not implemented'
            },
            {
                id: 5,
                question: 'Has it been planned to publish the interfaces of the information systems involved in the provision of Integrated Public Service?',
                type: 'Not implemented'
            },
            {
                id: 6,
                question: 'Will new solutions or related APIs developed for them be cataloged to be accessible to third parties?',
                type: 'Not implemented'
            },
            {
                id: 7,
                question: 'Will the Integrated Public Service leverage (reuse) existing solutions and functions that are listed in the catalogs of programming interfaces (APIs) and solutions or another relevant catalog?',
                type: 'Not implemented'
            },
            {
                id: 8,
                question: 'As part of the creation of the Integrated Public Service, will software that is already available in catalogs (e.g. programming interfaces and solutions) or another relevant catalog be reused?',
                type: 'Not implemented'
            },
        ],
        maturityLevels: [
            {
                level: 1,
                response: 'Poor interoperability – the digital public service cannot be considered interoperable.'
            },
            {
                level: 2,
                response: 'Fair interoperability – the digital public service implements some elements of interoperability best practices.'
            },
            {
                level: 3,
                response: 'Essential interoperability – the digital public service implements the essential best practices for interoperability.'
            },
            {
                level: 4,
                response: 'Good interoperability – all relevant interoperability best practices are implemented by the digital public service.'
            },
            {
                level: 5,
                response: 'Interoperability leading practice – the digital public service is a leading interoperability practice example for others.'
            },
        ]
    },
    el: {
        content: {
            menu_home: 'Αρχική',
            menu_survey: 'Έρευνα',
            menu_about: 'Σχετικά',
            homepage_title: 'Αξιολογητής Διαλειτουργικότητας Δημοσίων Υπηρεσιών',
            homepage_text: 'Ο αξιολογητής διαλειτουργικότητας είναι ένα εργαλείο αυτοαξιολόγησης που παρέχει έναν εύκολο και γρήγορο τρόπο κατανόησης του επιπέδου διαλειτουργικότητας μιας δημόσιας υπηρεσίας.',
            homepage_cta: 'Έναρξη έρευνας',
            about_heading: 'Σχετικά',
            about_par1: 'Το Interoperability of Public Services Evaluator είναι μια εφαρμογή που δημιουργήθηκε στο πλαίσιο της διπλωματικής μου εργασίας ως τελικό έργο των σπουδών μου στο Ελληνικό Ανοικτό Πανεπιστήμιο. Η εφαρμογή είναι μια έρευνα αυτοαξιολόγησης που προσφέρει έναν εύκολο τρόπο ελέγχου του επιπέδου ωριμότητας της διαλειτουργικότητας μιας δημόσιας υπηρεσίας και βασίζεται στο νέο ελληνικό πλαίσιο Διαλειτουργικότητας.',
            about_par2: 'Για αυτό το έργο χρησιμοποιήθηκαν διάφορες τεχνολογίες. Ο αρχικός σχεδιασμός της εφαρμογής δημιουργήθηκε στο Figma αλλά και τα γραφικά που χρησιμοποιήθηκαν στην ανάπτυξη. Η εφαρμογή δημιουργήθηκε με το React.js και επίσης το Firebase. Το Sass χρησιμοποιήθηκε για το στυλ της σελίδας.',
            about_par3: 'Μπορείτε να επικοινωνήσετε στο',
            about_par4: 'Ευχαριστώ που περάσατε!',
            about_btn1: 'Αρχική',
            about_btn2: 'Έναρξη έρευνας',
            survey_title: 'Αξιολογητής Διαλειτουργικότητας Δημοσίων Υπηρεσιών',
            survey_cta: 'Υποβολή',
            results_label: 'Σύνολο',
            results_title: 'Αποτελέσματα',
            survey_label:['Καθόλου','Ελάχιστα','Λίγο','Μέτρια','Πολύ','Εντελώς'],
            results_level: 'Επίπεδο οριμότητας:',
            results_help_title: 'Προτεινόμενες Πηγές',
            results_help_link_text: 'Κατεβάστε το νέο Εθνικό Πλαίσιο Διαλειτουργικότητας',
            results_help_link: 'εδώ',
            results_help_subtitle: 'Επιπλέον προτεινόμενα εργαλεία για προγραμματιστές',
        },
        questions: [
            {
                id: 1,
                question: 'Η ΟΔΥ παράγει δεδομένα υψηλής αξίας τα οποία διαθέτει ως ανοικτά δεδομένα;',
                type: 'Not implemented'
            },
            {
                id: 2,
                question: 'Η ανάπτυξη της ΟΔΥ βασίζεται σε ανοικτές προδιαγραφές;',
                type: 'Not implemented'
            },
            {
                id: 3,
                question: 'Έχει γίνει διαβούλευση με εταιρείες του χώρου αναφορικά με τις προδιαγραφές;',
                type: 'Not implemented'
            },
            {
                id: 4,
                question: 'Έχει προβλεφθεί η συστηματική αποτύπωση και δημοσίευση των διαδικασιών που υποστηρίζουν την ΟΔΥ;',
                type: 'Not implemented'
            },
            {
                id: 5,
                question: 'Έχει προβλεφθεί η δημοσίευση των διεπαφών των πληροφοριακών συστημάτων που εμπλέκονται στην παροχή της ΟΔΥ;',
                type: 'Not implemented'
            },
            {
                id: 6,
                question: 'Οι νέες λύσεις ή οι σχετικές προγραμματιστικές διεπαφές που θα αναπτυχθούν για αυτές θα είναι καταχωρημένες σε καταλόγους για να είναι προσβάσιμες και σε τρίτους φορείς;',
                type: 'Not implemented'
            },
            {
                id: 7,
                question: 'Η ΟΔΥ θα αξιοποιεί (επαναχρησιμοποιεί) υφιστάμενες λύσεις και λειτουργίες που είναι καταχωρημένες στους καταλόγους προγραμματιστικών διεπαφών (APIs) και λύσεων ή σε άλλο σχετικό κατάλογο;',
                type: 'Not implemented'
            },
            {
                id: 8,
                question: 'Στο πλαίσιο της δημιουργίας της ΟΔΥ θα επαναχρησιμοποιηθεί λογισμικό το οποίο είναι ήδη διαθέσιμο σε καταλόγους (π.χ. προγραμματιστικών διεπαφών και λύσεων) ή σε άλλο σχετικό κατάλογο;',
                type: 'Not implemented'
            },
        ],
        maturityLevels: [
            {
                level: 1,
                response: 'Κακή διαλειτουργικότητα – η ψηφιακή δημόσια υπηρεσία δεν μπορεί να θεωρηθεί διαλειτουργική.'
            },
            {
                level: 2,
                response: 'Δίκαιη διαλειτουργικότητα – η ψηφιακή δημόσια υπηρεσία εφαρμόζει ορισμένα στοιχεία βέλτιστων πρακτικών διαλειτουργικότητας.'
            },
            {
                level: 3,
                response: 'Βασική διαλειτουργικότητα – η ψηφιακή δημόσια υπηρεσία εφαρμόζει τις βασικές βέλτιστες πρακτικές για τη διαλειτουργικότητα.'
            },
            {
                level: 4,
                response: 'Καλή διαλειτουργικότητα – όλες οι σχετικές βέλτιστες πρακτικές διαλειτουργικότητας εφαρμόζονται από την ψηφιακή δημόσια υπηρεσία.'
            },
            {
                level: 5,
                response: 'Κορυφαία πρακτική διαλειτουργικότητας – η ψηφιακή δημόσια υπηρεσία είναι ένα κορυφαίο παράδειγμα πρακτικής διαλειτουργικότητας για άλλους.'
            },
        ]
    }
}
export default translations