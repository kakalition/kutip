<?php

namespace Database\Seeders;

use App\Models\Quote;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data= [
            // Epictetus
            ['author_id' => '1', 'quote' => 'We have two ears and one mouth so that we can listen twice as much as we speak.'],

            // Marcus Aurelius
            ['author_id' => '2', 'quote' => 'How ridiculous and how strange to be surprised at anything which happens in life.'],

            // Musonius Rufus
            ['author_id' => '3', 'quote' => 'Ignorance is the cause of fear.'],

            // Seneca
            ['author_id' => '4', 'quote' => ''],

            // Zeno of Citium
            ['author_id' => '5', 'quote' => ''],
        ];

        Quote::insert($data);
    }
}
