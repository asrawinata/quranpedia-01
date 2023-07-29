<?php

namespace App\Models;

use CodeIgniter\Model;

class QuranModel extends Model
{
    protected $table = 'quran_arabic';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $allowedFields = ['text'];

    public function replaceArabicWord($searchWord, $replaceWord)
    {
        $this->db->transStart();

        // Ambil semua ayat yang mengandung kata yang ingin diganti
        $matchedVerses = $this->select('id, text')->like('text', $searchWord)->findAll();

        if (count($matchedVerses) > 0) {
            foreach ($matchedVerses as $verse) {
                // Ganti kata dan simpan kembali ke database
                $updatedText = str_replace($searchWord, $replaceWord, $verse['text']);
                $this->where('id', $verse['id'])->set('text', $updatedText)->update();
            }
        }

        $this->db->transComplete();

        return $this->db->transStatus();
    }
}
