<?php 

namespace App\Models;

use CodeIgniter\Model;

class DetailModel extends Model
{
    protected $jsonFile = FCPATH . 'akarkata.json'; // Ubah WRITEPATH sesuai dengan path yang sesuai di server Anda

    public function getRootData($root_id)
    {
        $json = file_get_contents($this->jsonFile);
        $data = json_decode($json, true);

        foreach ($data['RootWords'] as $root) {
            if ($root['root_id'] == $root_id) {
                return $root;
            }
        }

        return null;
    }
}