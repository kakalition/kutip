@extends('root')

@section('root-view')
    <div 
        id="home-root" 
        data-username={{ $username }}
        data-authors={{ $authors }}>
    </div>
@endsection