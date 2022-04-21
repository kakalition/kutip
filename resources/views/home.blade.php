@extends('root')

@section('root-view')
    <div 
        id="home-root" 
        data-user={{ $user }}
        data-authors={{ $authors }}>
    </div>
@endsection