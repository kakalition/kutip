<?php

namespace Database\Seeders;

use App\Models\Author;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data= [
            ['name' => 'Epictetus'],
            ['name' => 'Marcus Aurelius'],
            ['name' => 'Musonius Rufus'],
            ['name' => 'Seneca'],
            ['name' => 'Zeno of Citium'],
        ];

        Author::insert($data);
    }
}
