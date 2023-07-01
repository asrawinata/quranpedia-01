<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use App\Models\DetailModel;
use App\Models\SurahModel;
// use CodeIgniter\Files\Paths;

class Detailv extends BaseController
{
    protected $surahModel;
    protected $detailModel;
    public function __construct()
    {
        $this->surahModel = new SurahModel();
        $this->detailModel = new DetailModel();
        // parent::__construct();
        helper('filesystem');
    }

    public function getRootData($pageNumber)
    {

    return view('page/surahview/' .$pageNumber);



    }

    public function getData() {

        $selectedText = $this->request->getVar('selectedText');


        $arabicWordJson = file_get_contents('arabicword.json');
        $arabicWordData = json_decode($arabicWordJson, true);

        $rootWordsJson = file_get_contents('rootwords.json');
        $rootWordsData = json_decode($rootWordsJson, true);

        $matchedRootWord = '';

        foreach ($arabicWordData['ArabicWord'] as $arabicWord) {
            if ($arabicWord['word'] == $selectedText) {

                foreach ($rootWordsData['RootWords'] as $rootWord) {
                    if ($rootWord['root_id'] == $arabicWord['root_id']) {
                        $matchedRootWord = $rootWord['root_word'];
                        break;
                    }
                }
                break;
            }
        }


        $data = [
            'selectedText' => $selectedText,
            'matchedRootWord' => $matchedRootWord,
        ];

        return view('page/detailv', $data);
        }
    
      
    

//     public function akarkata()
//     {
//         $detailakar = $this->detailModel->findAll();

//         $kata = [
//             'akarquran' => $detailakar,
//         ];

//     return view ('page/surahview/1', $kata);
//     }
}