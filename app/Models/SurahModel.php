<?php

namespace App\Models;

use CodeIgniter\Model;

class SurahModel extends Model
{
    protected $table = 'quran_indonesia'; // Nama tabel surah pada basis data

    public function getSurahByNumber($surahNumber)
    {
        // Mengambil data surah berdasarkan nomor surah
        $query = $this->where('number', $surahNumber)->first();

        return $query;
    }
}
