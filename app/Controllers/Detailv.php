<?php

namespace App\Controllers;

use CodeIgniter\Controller;

// use CodeIgniter\Files\Paths;

class Detailv extends Controller
{
    public function __construct()
    {
        // parent::__construct();
        helper('filesystem');
    }

    public function getRootData()
    {
        // Muat File Helper
        // helper('file');
        // helper('filesystem');
        // helper('path');

//         $jsonFile = FCPATH . 'akarkata.json';
//         $jsonData = file_get_contents($jsonFile);
//         $data = json_decode($jsonData, true);
// // dd($jsonData);
//         // Decode data JSON
        
//         // dd($data);
        

//         return view ('page/1', [
//             // 'arabic' => $data,
//             'akar' => $data,
//         ]
    
//     );

return view('page/surahview/1');



        // Periksa apakah decoding berhasil
        // if ($data !== null) {
        //     // Decoding berhasil, Anda dapat menggunakan variabel $data
        // } else {
        //     // Terjadi kesalahan saat decoding data JSON
        // }
    }
}

