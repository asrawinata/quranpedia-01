<?php 

namespace App\Controllers;

// use CodeIgniter\Controller;
use App\Models\DepanModel;

class Depan extends BaseController
{

    protected $depanModel;
    public function __construct()
    {
        $this->depanModel = new DepanModel();
    }

    public function index()
    {
        $quranhome = $this->depanModel->findAll();

        $data = [
            'surah' => $quranhome,
            // 'ayat' => $quranhome
        ];
    
        // dd($quranhome);
       return view('page/index',$data);
    }

    public function show_daftar()
    {
        
    }

    public function id($index)
    {
        echo $index;
    }
}
