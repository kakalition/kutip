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
            ['author_id' => '1', 'quote' => 'No man is free who is not master of himself.'],
            ['author_id' => '1', 'quote' => 'Men are disturbed not by things, but by the view which they take of them.'],
            ['author_id' => '1', 'quote' => 'It is difficulties that show what men are.'],
            ['author_id' => '1', 'quote' => 'Make the best use of what is in your power, and take the rest as it happens.'],
            ['author_id' => '1', 'quote' => 'A ship should not ride on a single anchor, nor life on a single hope.'],
            ['author_id' => '1', 'quote' => 'No great thing is created suddenly.'],
            ['author_id' => '1', 'quote' => 'Know, first, who you are, and then adorn yourself accordingly.'],
            ['author_id' => '1', 'quote' => 'It is the nature of the wise to resist pleasures, but the foolish to be a slave to them.'],
            ['author_id' => '1', 'quote' => 'First learn the meaning of what you say, and then speak.'],
            ['author_id' => '1', 'quote' => 'If you want something good, get it yourself.'],

            // Marcus Aurelius
            ['author_id' => '2', 'quote' => 'The more we value things outside our control, the less control we have.'],
            ['author_id' => '2', 'quote' => 'The best answer to anger is silence.'],
            ['author_id' => '2', 'quote' => 'How ridiculous and how strange to be surprised at anything which happens in life.'],
            ['author_id' => '2', 'quote' => 'You have power over your mind – not outside events. Realize this, and you will find strength.'],
            ['author_id' => '2', 'quote' => 'The best revenge is not to be like your enemy.'],
            ['author_id' => '2', 'quote' => 'Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.'],
            ['author_id' => '2', 'quote' => 'Confine yourself to the present.'],
            ['author_id' => '2', 'quote' => 'When you arise in the morning, think of what a precious privilege it is to be alive – to breathe, to think, to enjoy, to love.'],
            ['author_id' => '2', 'quote' => 'You can commit injustice by doing nothing'],
            ['author_id' => '2', 'quote' => 'Waste no more time arguing about what a good man should be. Be one.'],
            ['author_id' => '2', 'quote' => 'Each day provides its own gifts.'],
            ['author_id' => '2', 'quote' => 'Give yourself a gift, the present moment.'],
            ['author_id' => '2', 'quote' => 'The only wealth which you will keep forever is the wealth you have given away.'],
            ['author_id' => '2', 'quote' => 'Have I been made for this, to lie under the blankets and keep myself warm?'],
            ['author_id' => '2', 'quote' => 'Conceal a flaw, and the world will imagine the worst.'],
            ['author_id' => '2', 'quote' => 'Life is neither good or evil, but only a place for good and evil.'],
            ['author_id' => '2', 'quote' => 'I cannot escape death, but at least I can escape the fear of it.'],
            ['author_id' => '2', 'quote' => 'How trivial the things we want so passionately are.'],
            ['author_id' => '2', 'quote' => 'Settle on the type of person you want to be and stick to it, whether alone or in company.'],
            ['author_id' => '2', 'quote' => 'Consider at what price you sell your integrity, but please, for God’s sake, don’t sell it cheap.'],

            // Musonius Rufus
            ['author_id' => '3', 'quote' => 'We begin to lose our hesitation to do immoral things when we lose our hesitation to speak of them.'],
            ['author_id' => '3', 'quote' => 'Humanity must seek what is NOT simple and obvious using the simple and obvious.'],
            ['author_id' => '3', 'quote' => 'Since every man dies, it is better to die with distinction than to live long.'],
            ['author_id' => '3', 'quote' => 'Only by exhibiting actions in harmony with the sound words which he has received will anyone be helped by philosophy.'],
            ['author_id' => '3', 'quote' => 'Thus whoever destroys human marriage destroys the home, the city-the whole human race.'],

            // Seneca
            ['author_id' => '4', 'quote' => 'We suffer more often in imagination than in reality.'],
            ['author_id' => '4', 'quote' => 'Ignorance is the cause of fear.'],
            ['author_id' => '4', 'quote' => 'While we wait for life, life passes.'],
            ['author_id' => '4', 'quote' => 'Life is long, if you know how to use it.'],
            ['author_id' => '4', 'quote' => 'Hurry up and live.'],
            ['author_id' => '4', 'quote' => 'Cease to hope and you will cease to fear.'],
            ['author_id' => '4', 'quote' => 'Wealth is the slave of a wise man and the master of a fool.'],
            ['author_id' => '4', 'quote' => 'Only time can heal what reason cannot.'],
            ['author_id' => '4', 'quote' => 'While we are postponing, life speeds by.'],
            ['author_id' => '4', 'quote' => 'Life, if well lived, is long enough.'],
            ['author_id' => '4', 'quote' => 'Hang on to your youthful enthusiasms, you will be able to use them better when you are older.'],
            ['author_id' => '4', 'quote' => 'He who is brave is free.'],
            ['author_id' => '4', 'quote' => 'It is a rough road that leads to the heights of greatness.'],
            ['author_id' => '4', 'quote' => 'It is more civilized to make fun of life than to bewail it.'],
            ['author_id' => '4', 'quote' => 'Difficulty comes from our lack of confidence.'],
            ['author_id' => '4', 'quote' => 'Life is very short and anxious for those who forget the past, neglect the present, and fear the future.'],
            ['author_id' => '4', 'quote' => 'What really ruins our character is the fact that none of us looks back over his life.'],
            ['author_id' => '4', 'quote' => 'It does not matter how many books you have, but how good are the books which you have.'],
            ['author_id' => '4', 'quote' => 'For many men, the acquisition of wealth does not end their troubles, it only changes them.'],
            ['author_id' => '4', 'quote' => 'The greatest remedy for anger is delay.'],

            // Zeno of Citium
            ['author_id' => '5', 'quote' => 'All the good are friends of one another.'],
            ['author_id' => '5', 'quote' => 'No loss should be more regrettable to us than losing our time, for it’s irretrievable.'],
            ['author_id' => '5', 'quote' => 'Extravagance is its own destroyer.'],
            ['author_id' => '5', 'quote' => 'Man conquers the world by conquering himself.'],
            ['author_id' => '5', 'quote' => 'Steel your sensibilities, so that life shall hurt you as little as possible.'],
            ['author_id' => '5', 'quote' => 'Better to trip with the feet than with the tongue'],
            ['author_id' => '5', 'quote' => 'A bad feeling is a commotion of the mind repugnant to reason, and against nature.'],
        ];

        Quote::insert($data);
    }
}
